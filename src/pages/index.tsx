import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ParticlesBackground from '../components/ParticlesBackground';

const socialLinks = [
  { href: 'https://github.com/Asterki', icon: faGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/fernando-rivera-365b74270/', icon: faLinkedin, label: 'LinkedIn' },
  { href: 'https://instagram.com/nicht.fer', icon: faInstagram, label: 'Instagram' },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function HomePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero with gradient — friendlier than flat ink */}
      <div className="hero-gradient relative overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
        <ParticlesBackground />

        <motion.div
          className="relative z-10 hp-container min-h-[85vh] flex flex-col items-center justify-center text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={item} className="caption-text text-accent-orange font-medium mb-4">
            {t('hero.greeting')}
          </motion.p>
          <motion.h1 variants={item} className="text-[72px] text-white text-text-onink mb-3 max-w-4xl" style={{ fontWeight: 500, lineHeight: 1.0 }}>
            {t('hero.name')}
          </motion.h1>
          <motion.p variants={item} className="text-[24px] text-white/50 mb-6" style={{ fontWeight: 500, lineHeight: 1.17 }}>
            {t('hero.title')}
          </motion.p>
          <motion.p variants={item} className="body-text text-white/30 max-w-xl mb-10">
            {t('hero.subtitle')}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <button onClick={() => navigate('/about')} className="btn-primary">{t('hero.cta_about')}</button>
            <button onClick={() => navigate('/projects')} className="btn-outline border-white/20 text-white hover:bg-white hover:text-ink">{t('hero.cta_projects')}</button>
            <button onClick={() => navigate('/contact')} className="btn-text-link text-white/50 hover:text-white">
              {t('hero.cta_contact')} <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
            </button>
          </motion.div>

          {/* Social */}
          <motion.div variants={item} className="flex items-center gap-5">
            {socialLinks.map(({ href, icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                className="text-white/25 hover:text-accent-orange transition-colors">
                <FontAwesomeIcon icon={icon} className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Cloud band — quick pitch */}
      <div className="section-band-cloud">
        <div className="hp-container text-center">
          <p className="body-text max-w-2xl mx-auto mt-6" style={{ fontSize: '18px', lineHeight: 1.33 }}>
            Software Engineer at UNAH, building internal tools, teaching workshops, and opening boxes of curiosity.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {['React', 'TypeScript', 'Python', 'MongoDB', 'PostgreSQL', 'Docker'].map((skill) => (
              <span key={skill} className="badge-pill-outline">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
