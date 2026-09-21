import { useId } from 'react';

function LogoFrame({ size, background, children }) {
  return (
    <span
      className="grid shrink-0 place-items-center overflow-hidden rounded-[5px]"
      style={{ width: size, height: size, background }}
    >
      {children}
    </span>
  );
}

function GitHubLogo({ size }) {
  return (
    <LogoFrame size={size} background="#ffffff">
      <svg width={size - 4} height={size - 4} viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#181717"
          d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        />
      </svg>
    </LogoFrame>
  );
}

function LinkedInLogo({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className="shrink-0 overflow-hidden rounded-[5px]">
      <path
        fill="#0A66C2"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  );
}

function LeetCodeLogo({ size }) {
  return (
    <LogoFrame size={size} background="#000000">
      <svg width={size - 4} height={size - 4} viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#FFA116"
          d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.365 5.365 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"
        />
      </svg>
    </LogoFrame>
  );
}

function InstagramLogo({ size }) {
  const fill = useId();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="shrink-0 overflow-hidden rounded-[5px]"
    >
      <defs>
        <radialGradient id={fill} cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#FDF497" />
          <stop offset="10%" stopColor="#FDF497" />
          <stop offset="45%" stopColor="#FD5949" />
          <stop offset="60%" stopColor="#D6249F" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill={`url(#${fill})`} />
      <rect
        x="5.2"
        y="5.2"
        width="13.6"
        height="13.6"
        rx="4"
        fill="none"
        stroke="#fff"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="3.35" fill="none" stroke="#fff" strokeWidth="1.7" />
      <circle cx="16.35" cy="7.65" r="0.95" fill="#fff" />
    </svg>
  );
}

function WhatsAppLogo({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className="shrink-0 overflow-hidden rounded-[5px]">
      <path
        fill="#25D366"
        d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.528 5.85L.057 23.325a.6.6 0 0 0 .737.737l5.475-1.47A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0"
      />
      <path
        fill="#fff"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"
      />
    </svg>
  );
}

function PhoneLogo({ size }) {
  return (
    <LogoFrame size={size} background="#111111">
      <svg width={size - 5} height={size - 5} viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#ffffff"
          d="M6.62 10.79a15.15 15.15 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.4 21 3 13.6 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.02z"
        />
      </svg>
    </LogoFrame>
  );
}

function GmailLogo({ size }) {
  return (
    <LogoFrame size={size} background="#ffffff">
      <svg width={size - 2} height={size - 2} viewBox="0 0 48 48" aria-hidden="true">
        <path fill="#4CAF50" d="M45 16.2 40 18.95 35 23.7V40h7c1.657 0 3-1.343 3-3V16.2z" />
        <path fill="#1E88E5" d="M3 16.2 6.614 17.91 13 23.25V40H6c-1.657 0-3-1.343-3-3V16.2z" />
        <path fill="#E53935" d="M35 11.2 24 19.45 13 11.2 12 17l1 6.25 11 8.25 11-8.25 1-6.25z" />
        <path fill="#C62828" d="M3 12.298V16.2l10 7.05V11.2L9.876 8.726C9.132 8.223 8.228 8 7.298 8 4.619 8 3 9.619 3 12.298z" />
        <path fill="#EF5350" d="M45 12.298V16.2l-10 7.05V11.2l3.124-2.474C38.868 8.223 39.772 8 40.702 8 43.381 8 45 9.619 45 12.298z" />
      </svg>
    </LogoFrame>
  );
}

const logos = {
  GitHub: GitHubLogo,
  LinkedIn: LinkedInLogo,
  Instagram: InstagramLogo,
  WhatsApp: WhatsAppLogo,
  Phone: PhoneLogo,
  LeetCode: LeetCodeLogo,
  Email: GmailLogo,
};

export function SocialLogo({ name, size = 18 }) {
  const Logo = logos[name];
  if (!Logo) return null;
  return <Logo size={size} />;
}

export function SocialLink({ name, href, onClick, className = '', size = 18 }) {
  const local = href.startsWith('mailto:') || href.startsWith('tel:');
  const external = !local;

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 transition-opacity hover:opacity-80 ${className}`}
    >
      <SocialLogo name={name} size={size} />
      <span>{name}</span>
    </a>
  );
}
