function Icon({ size = 16, children }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function ArrowUpRight({ size = 18 }) {
  return (
    <Icon size={size}>
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </Icon>
  );
}

export function Menu({ size = 18 }) {
  return (
    <Icon size={size}>
      <path d="M4 5h16" />
      <path d="M4 12h16" />
      <path d="M4 19h16" />
    </Icon>
  );
}

export function Moon({ size = 16 }) {
  return (
    <Icon size={size}>
      <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.402" />
    </Icon>
  );
}

export function Sun({ size = 16 }) {
  return (
    <Icon size={size}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </Icon>
  );
}

export function X({ size = 18 }) {
  return (
    <Icon size={size}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </Icon>
  );
}

export function ChevronLeft({ size = 18 }) {
  return (
    <Icon size={size}>
      <path d="m15 18-6-6 6-6" />
    </Icon>
  );
}

export function ChevronRight({ size = 18 }) {
  return (
    <Icon size={size}>
      <path d="m9 18 6-6-6-6" />
    </Icon>
  );
}

export function ChevronUp({ size = 18 }) {
  return (
    <Icon size={size}>
      <path d="m18 15-6-6-6 6" />
    </Icon>
  );
}

export function ChevronDown({ size = 18 }) {
  return (
    <Icon size={size}>
      <path d="m6 9 6 6 6-6" />
    </Icon>
  );
}

export function LayoutGrid({ size = 16 }) {
  return (
    <Icon size={size}>
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </Icon>
  );
}

export function LayoutList({ size = 16 }) {
  return (
    <Icon size={size}>
      <path d="M3 12h18" />
      <path d="M3 6h18" />
      <path d="M3 18h18" />
    </Icon>
  );
}

export function ExternalLink({ size = 16 }) {
  return (
    <Icon size={size}>
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </Icon>
  );
}

export function Eye({ size = 16 }) {
  return (
    <Icon size={size}>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </Icon>
  );
}

