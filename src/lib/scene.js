const VERTEX = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

const FRAGMENT = `
precision highp float;

uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_mode;
uniform float u_theme;

void main() {
  vec2 uv = gl_FragCoord.xy / u_res.xy;
  vec2 p = (gl_FragCoord.xy - 0.5 * u_res.xy) / min(u_res.x, u_res.y);
  p -= (u_mouse - 0.5) * 0.22;

  vec3 dark = vec3(0.0);
  vec3 cream = vec3(1.0);
  vec3 bg = mix(dark, cream, u_theme);
  vec3 fg = mix(cream, vec3(0.09), u_theme);
  float mode = clamp(u_mode, 0.0, 2.0);

  float wave = 0.0;
  for (int i = 0; i < 5; i++) {
    float fi = float(i);
    wave += sin(p.x * (2.8 + fi * 0.7) + u_time * (0.5 + fi * 0.07) + p.y * 1.8) * 0.28;
    wave += cos(length(p * (1.4 + fi * 0.2)) * 3.0 - u_time * 0.55) * 0.16;
  }
  float caustic = smoothstep(-0.35, 0.9, wave);
  vec3 water = bg + fg * caustic * 0.32;
  water += vec3(0.45, 0.72, 1.0) * pow(max(caustic, 0.0), 6.0) * 0.22 * (1.0 - u_theme);

  vec2 q = p;
  q.y += 0.42;
  float z = 1.0 / max(q.y + 0.78, 0.1);
  vec2 g = vec2(q.x * z * 6.0, z * 6.0 - u_time * 0.38);
  g.x += sin(g.y * 0.65 + u_time) * 0.2;
  vec2 grid = abs(fract(g) - 0.5);
  float line = 1.0 - smoothstep(0.012, 0.045, min(grid.x, grid.y));
  float fade = smoothstep(-0.08, 0.5, q.y + 0.78);
  vec3 mesh = bg + fg * line * fade * 0.42;
  mesh += vec3(0.55, 0.85, 1.0) * line * fade * 0.1 * (1.0 - u_theme);

  float r = length(p * vec2(1.05, 1.2));
  float a = atan(p.y, p.x);
  float rings = 0.5 + 0.5 * sin(r * 16.0 - u_time * 1.7 + a * 3.0);
  float glow = 0.12 / (r + 0.05);
  vec3 tunnel = bg + fg * rings * glow;
  tunnel += vec3(1.0, 0.84, 0.58) * glow * 0.35 * (1.0 - u_theme);

  vec3 col = mix(water, mesh, clamp(mode, 0.0, 1.0));
  col = mix(col, tunnel, clamp(mode - 1.0, 0.0, 1.0));
  col *= 1.0 - dot(uv - vec2(0.72, 0.46), uv - vec2(0.72, 0.46)) * 0.85;

  gl_FragColor = vec4(col, 1.0);
}
`;

function compile(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export function createScene(canvas) {
  const gl = canvas.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power' });
  if (!gl) return null;

  const vs = compile(gl, gl.VERTEX_SHADER, VERTEX);
  const fs = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT);
  if (!vs || !fs) return null;

  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null;

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

  const loc = gl.getAttribLocation(program, 'a_pos');
  const uniforms = {
    res: gl.getUniformLocation(program, 'u_res'),
    time: gl.getUniformLocation(program, 'u_time'),
    mouse: gl.getUniformLocation(program, 'u_mouse'),
    mode: gl.getUniformLocation(program, 'u_mode'),
    theme: gl.getUniformLocation(program, 'u_theme'),
  };

  const pointer = { x: 0.72, y: 0.5, tx: 0.72, ty: 0.5 };
  const state = { mode: 0, modeTarget: 0, theme: 0, running: true, raf: 0 };

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const width = Math.max(1, Math.floor(canvas.clientWidth * dpr));
    const height = Math.max(1, Math.floor(canvas.clientHeight * dpr));
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }
    gl.viewport(0, 0, canvas.width, canvas.height);
  };

  const onMove = (event) => {
    pointer.tx = event.clientX / window.innerWidth;
    pointer.ty = 1 - event.clientY / window.innerHeight;
  };

  const draw = (now) => {
    if (!state.running) return;
    state.raf = window.requestAnimationFrame(draw);
    resize();
    pointer.x += (pointer.tx - pointer.x) * 0.04;
    pointer.y += (pointer.ty - pointer.y) * 0.04;
    state.mode += (state.modeTarget - state.mode) * 0.055;

    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    gl.uniform2f(uniforms.res, canvas.width, canvas.height);
    gl.uniform1f(uniforms.time, now * 0.001);
    gl.uniform2f(uniforms.mouse, pointer.x, pointer.y);
    gl.uniform1f(uniforms.mode, state.mode);
    gl.uniform1f(uniforms.theme, state.theme);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  };

  window.addEventListener('pointermove', onMove, { passive: true });
  state.raf = window.requestAnimationFrame(draw);

  return {
    setMode(mode) {
      state.modeTarget = mode;
    },
    setTheme(theme) {
      state.theme = theme;
    },
    pause() {
      state.running = false;
      window.cancelAnimationFrame(state.raf);
    },
    resume() {
      if (state.running) return;
      state.running = true;
      state.raf = window.requestAnimationFrame(draw);
    },
    destroy() {
      state.running = false;
      window.cancelAnimationFrame(state.raf);
      window.removeEventListener('pointermove', onMove);
    },
  };
}
