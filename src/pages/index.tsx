import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faRocket, faCode } from '@fortawesome/free-solid-svg-icons';
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
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};
export default function HomePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero — warm dark with particles */}
      <div className="hero-gradient relative overflow-hidden">
        {/* Decorative glow blobs */}
        <div className="blob-glow blob-glow-primary w-[400px] h-[400px] -top-20 -left-20" />
        <div className="blob-glow blob-glow-orange w-[300px] h-[300px] top-1/3 -right-10" />

        {/* Soft grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
        <ParticlesBackground />

        <motion.div
          className="relative z-10 hp-container min-h-[88vh] flex flex-col items-center justify-center text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Warm greeting badge */}
          <motion.div variants={item} className="mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-[14px] font-medium backdrop-blur-sm border border-white/10">
              <span>👋</span> {t('hero.greeting')}
            </span>
          </motion.div>

          {/* Name — big and bold */}
          <motion.h1 variants={item}
            className="text-[64px] md:text-[80px] lg:text-[96px] text-white mb-3 max-w-4xl font-bold leading-[0.95] tracking-tight">
            {t('hero.name')}
          </motion.h1>

          {/* Title with gradient accent */}
          <motion.p variants={item}
            className="text-[22px] md:text-[26px] text-white/60 mb-6 font-medium leading-[1.2]">
            {t('hero.title')}
          </motion.p>

          {/* Subtitle */}
          <motion.p variants={item}
            className="text-[17px] text-white/40 max-w-xl mb-10 leading-relaxed">
            {t('hero.subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-3 mb-14">
            <button onClick={() => navigate('/about')}
              className="inline-flex items-center gap-2 px-7 h-12 bg-white text-[#1b1417] font-semibold rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 text-[15px] shadow-lg hover:shadow-white/25">
              <FontAwesomeIcon icon={faRocket} className="w-4 h-4" />
              {t('hero.cta_about')}
            </button>
            <button onClick={() => navigate('/projects')}
              className="inline-flex items-center gap-2 px-7 h-12 bg-white/10 text-white font-medium rounded-xl border border-white/20 transition-all duration-200 hover:bg-white/20 hover:scale-105 active:scale-95 text-[15px] backdrop-blur-sm">
              <FontAwesomeIcon icon={faCode} className="w-4 h-4" />
              {t('hero.cta_projects')}
            </button>
            <button onClick={() => navigate('/contact')}
              className="btn-text-link text-white/50 hover:text-white">
              {t('hero.cta_contact')} <FontAwesomeIcon icon={faArrowRight} className="w-3.5 h-3.5" />
            </button>
          </motion.div>

          {/* Social — slightly more prominent */}
          <motion.div variants={item} className="flex items-center gap-6">
            {socialLinks.map(({ href, icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                className="text-white/25 hover:text-white transition-all duration-200 hover:scale-110 hover:-translate-y-0.5">
                <FontAwesomeIcon icon={icon} className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Warm cloud band — quick pitch */}
      <div className="warm-band">
        <div className="hp-container py-12 md:py-16 text-center">
          <div className="max-w-2xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-[17px] md:text-[19px] text-[#3d2c28] leading-relaxed font-medium">
              Software Engineer at UNAH, building internal tools, teaching workshops, and opening boxes of curiosity.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {['React', 'TypeScript', 'Python', 'MongoDB', 'PostgreSQL', 'Docker'].map((skill) => (
                <span key={skill} className="badge-pill-outline">{skill}</span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
