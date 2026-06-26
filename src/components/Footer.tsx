import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
  { href: 'https://github.com/Asterki', icon: faGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/fernando-rivera-365b74270/', icon: faLinkedin, label: 'LinkedIn' },
  { href: 'https://instagram.com/nicht.fer', icon: faInstagram, label: 'Instagram' },
];

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="ink-slab-warm mt-auto relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent-orange to-primary opacity-60" />
      <div className="hp-container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="caption-text text-white/40">
            &copy; {new Date().getFullYear()} Fernando Rivera — {t('footer.tagline')}
          </p>
          <div className="flex items-center gap-5">
            {socialLinks.map(({ href, icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                className="text-white/30 hover:text-primary transition-all duration-200 hover:scale-110 hover:-translate-y-0.5">
                <FontAwesomeIcon icon={icon} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
