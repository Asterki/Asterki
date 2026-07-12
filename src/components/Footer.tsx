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
    <footer className="nord-slab-gradient mt-auto relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#88C0D0] via-[#81A1C1] to-[#5E81AC] opacity-50" />
      <div className="hp-container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="caption-text text-[#D8DEE9]/40">
            &copy; {new Date().getFullYear()} Fernando Rivera - {t('footer.tagline')}
          </p>
          <div className="flex items-center gap-5">
            {socialLinks.map(({ href, icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                className="text-[#D8DEE9]/30 hover:text-[#88C0D0] transition-all duration-200 hover:scale-110 hover:-translate-y-0.5">
                <FontAwesomeIcon icon={icon} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
