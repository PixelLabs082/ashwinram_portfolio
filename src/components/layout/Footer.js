import { SocialLink } from '@/components/ui/SocialLinks';
import { site } from '@/data/site';
import { container } from '@/lib/ui';

function Footer() {
  return (
    <footer className="relative z-1 border-t border-line py-10 sm:py-16">
      <div className={`${container} grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 sm:gap-10`}>
        <div>
          <p className="mb-3 text-[0.72rem] uppercase tracking-[0.16em] text-fg">{site.location}</p>
          <p className="brand-mark text-[22px] font-medium tracking-tight">
            {site.brand}
          </p>
        </div>
        <div>
          <p className="mb-4 text-[0.72rem] uppercase tracking-[0.16em] text-fg">Sitemap</p>
          {site.nav.map((link) => (
            <a key={link.href} href={link.href} className="mb-2 block text-muted transition-colors hover:text-fg">
              {link.name}
            </a>
          ))}
        </div>
        <div>
          <p className="mb-4 text-[0.72rem] uppercase tracking-[0.16em] text-fg">Socials</p>
          <div className="flex flex-col items-start gap-2.5">
            {site.socials.map((link) => (
              <SocialLink
                key={link.name}
                name={link.name}
                href={link.href}
                className="text-muted hover:text-fg"
              />
            ))}
          </div>
        </div>
        <div className="md:text-right">
          <p className="mb-3 text-muted">© {site.name.split(' ')[0]}'s personal portfolio</p>
          <a href="#home" className="text-muted transition-colors hover:text-fg">
            Back to Home
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
