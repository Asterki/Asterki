import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faComment, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';

const contactMethods = [
  { icon: faEnvelope, labelKey: 'contact.email_label', value: 'asterki.dev@proton.me', href: 'mailto:asterki.dev@proton.me' },
  { icon: faDiscord, labelKey: 'contact.discord_label', value: '@asterki', href: 'https://discord.com/users/asterki' },
  { icon: faInstagram, labelKey: 'contact.instagram_label', value: '@nicht.fer', href: 'https://instagram.com/nicht.fer' },
  { icon: faGithub, labelKey: 'contact.github_label', value: 'Asterki', href: 'https://github.com/Asterki' },
  { icon: faLinkedin, labelKey: 'contact.linkedin_label', value: 'Fernando Rivera', href: 'https://www.linkedin.com/in/fernando-rivera-365b74270/' },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const fadeUp = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } } };

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <motion.div className="max-w-4xl mx-auto" variants={container} initial="hidden" animate="show">
        <motion.div variants={fadeUp} className="mb-10 text-center">
          <h1 className="section-heading">{t('contact.title')}</h1>
          <p className="section-subtitle mx-auto">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Left column — contact methods */}
          <motion.div variants={fadeUp}>
            <h2 className="text-[16px] text-ink mb-4 flex items-center gap-2" style={{ fontWeight: 500, lineHeight: 1.38 }}>
              <FontAwesomeIcon icon={faComment} className="text-primary w-4 h-4" />
              Reach out directly
            </h2>
            <div className="space-y-3">
              {contactMethods.map((method) => (
                <a key={method.labelKey} href={method.href} target="_blank" rel="noreferrer"
                  className="card p-4 flex items-center gap-4 transition-all duration-200 hover:scale-[1.02] group">
                  <div className="icon-box w-10 h-10">
                    <FontAwesomeIcon icon={method.icon} className="text-primary w-[18px] h-[18px]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="caption-text">{t(method.labelKey)}</div>
                    <div className="text-[16px] text-ink font-medium truncate" style={{ fontWeight: 500, lineHeight: 1.38 }}>
                      {method.value}
                    </div>
                  </div>
                  <FontAwesomeIcon icon={faArrowRight} className="text-text-graphite group-hover:text-primary group-hover:translate-x-0.5 w-4 h-4 transition-all duration-200" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right column — CTA card with warm band */}
          <motion.div variants={fadeUp}>
            <div className="warm-band h-full rounded-2xl p-8 md:p-10 flex flex-col items-center justify-center text-center border border-primary/5">
              <div className="icon-box w-14 h-14 rounded-xl mb-5">
                <FontAwesomeIcon icon={faEnvelope} className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-[24px] text-ink mb-2 font-semibold" style={{ lineHeight: 1.17 }}>
                Let's work together
              </h3>
              <p className="body-text mb-6 max-w-xs">
                Have a project idea, collaboration proposal, or just want to say hi? I'm always open.
              </p>
              <a href="mailto:asterki.dev@proton.me" className="btn-primary">
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" /> {t('contact.cta')}
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
