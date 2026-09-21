import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#000000',
          color: '#ffffff',
          padding: '72px 80px',
        }}
      >
        <p style={{ fontSize: 28, letterSpacing: 4, textTransform: 'uppercase', opacity: 0.64 }}>
          Software Developer
        </p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={{ fontSize: 96, lineHeight: 0.9, fontWeight: 500, letterSpacing: -3, margin: 0 }}>
            Santhosh
          </p>
          <p style={{ fontSize: 32, lineHeight: 1.4, opacity: 0.7, marginTop: 28, maxWidth: 720 }}>
            Web apps and websites for founders and small teams.
          </p>
        </div>
        <p style={{ fontSize: 24, opacity: 0.5 }}>Available for work</p>
      </div>
    ),
    size,
  );
}
