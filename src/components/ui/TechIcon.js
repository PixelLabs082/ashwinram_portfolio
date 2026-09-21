export function TechIcon({ name, className = 'w-3.5 h-3.5' }) {
  const normalized = String(name).toLowerCase().trim();

  if (normalized.includes('vercel')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L24 22H0z" />
      </svg>
    );
  }

  if (normalized.includes('fastapi')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M13 6l-5 7h4l-2 5 7-8h-4l2-4z" fill="currentColor" />
      </svg>
    );
  }

  if (normalized.includes('gpt') || normalized.includes('openai')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4z" />
      </svg>
    );
  }

  if (normalized.includes('chrome') || normalized.includes('extension')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3.5" />
        <line x1="12" y1="3.5" x2="20" y2="12" />
      </svg>
    );
  }

  if (normalized.includes('express')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    );
  }

  if (normalized.includes('redis')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    );
  }

  if (normalized.includes('posthog') || normalized.includes('hog')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v4l3 3" />
      </svg>
    );
  }

  if (normalized.includes('sentry')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" />
      </svg>
    );
  }

  if (normalized.includes('vite')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 22h20L12 2z" strokeLinejoin="round" />
        <path d="M12 6l5 10h-6l2 4" strokeLinecap="round" />
      </svg>
    );
  }

  if (normalized.includes('react')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  if (normalized.includes('supabase')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.35 2.1a1 1 0 0 0-1.28.3L3.18 13.9a1 1 0 0 0 .8 1.6h7.32L10.65 21.9a1 1 0 0 0 1.28-.3l8.89-11.5a1 1 0 0 0-.8-1.6h-6.67z" />
      </svg>
    );
  }

  if (normalized.includes('firebase')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8.5 14.5 12 3l3.5 11.5L12 21z" />
        <path d="M4 11l4.5 3.5L12 3" />
        <path d="M20 11l-4.5 3.5L12 3" />
      </svg>
    );
  }

  if (normalized.includes('cloudflare')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17.5 19H6a4 4 0 0 1-.7-7.9A6 6 0 0 1 17 9a4 4 0 0 1 .5 10z" />
      </svg>
    );
  }

  if (normalized.includes('stripe')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect width="18" height="14" x="3" y="5" rx="2" />
        <line x1="3" x2="21" y1="10" y2="10" />
      </svg>
    );
  }

  if (normalized.includes('cal')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
      </svg>
    );
  }

  if (normalized.includes('analytics') || normalized.includes('google')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" x2="18" y1="20" y2="10" />
        <line x1="12" x2="12" y1="20" y2="4" />
        <line x1="6" x2="6" y1="20" y2="14" />
      </svg>
    );
  }

  if (normalized.includes('cloudinary')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17.5 19H6a4 4 0 0 1-.7-7.9A6 6 0 0 1 17 9a4 4 0 0 1 .5 10z" />
        <circle cx="12" cy="13" r="2" />
      </svg>
    );
  }

  if (normalized.includes('mongo') || normalized.includes('mongodb')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M12 2C6.5 6 4 10 4 14a8 8 0 0 0 16 0c0-4-2.5-8-8-12z" />
      </svg>
    );
  }

  if (normalized.includes('formspree') || normalized.includes('form')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }

  if (normalized.includes('tailwind')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    );
  }

  if (normalized.includes('intercom')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    );
  }

  if (normalized.includes('next')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M16 16L10 8V16" />
        <path d="M14 8h2" />
      </svg>
    );
  }

  if (normalized.includes('typescript') || normalized.includes('ts')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M8 11h4M10 11v6M14 17c.5.5 1.5 1 2.5 1s2-.5 2-1.5-1-1.5-2.5-2S14 13 14 12c0-1.5 1.5-2 3-2s2.5.5 3 1" />
      </svg>
    );
  }

  if (normalized.includes('ai') || normalized.includes('gemini') || normalized.includes('sparkle')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" />
      </svg>
    );
  }

  if (normalized.includes('pdf')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    );
  }

  if (normalized.includes('framer') || normalized.includes('motion')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M5 3h14v7h-7l7 7h-7v4l-7-7h7V3z" />
      </svg>
    );
  }

  if (normalized.includes('api') || normalized.includes('rest')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect width="18" height="8" x="3" y="3" rx="2" />
        <rect width="18" height="8" x="3" y="13" rx="2" />
        <path d="M7 7h.01M7 17h.01" />
      </svg>
    );
  }

  // Fallback tech code icon
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export default TechIcon;
