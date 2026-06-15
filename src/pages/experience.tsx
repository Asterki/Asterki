import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faAward, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';

interface Role { key: string; icon: any; }
const roles: Role[] = [
  { key: 'unah_dev', icon: faBriefcase },
  { key: 'vimar', icon: faBriefcase },
  { key: 'mlsa', icon: faAward },
  { key: 'intern', icon: faBriefcase },
  { key: 'freelance_dev', icon: faBriefcase },
  { key: 'noctaly', icon: faBriefcase },
  { key: 'shardbot', icon: faBriefcase },
];
const educationItems = ['unah', 'marista'];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const fadeUp = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } } };

export default function ExperiencePage() {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <motion.div className="max-w-3xl mx-auto" variants={container} initial="hidden" animate="show">
        <motion.div variants={fadeUp} className="mb-10 text-center">
          <h1 className="section-heading">{t('experience.title')}</h1>
          <p className="section-subtitle mx-auto">{t('experience.subtitle')}</p>
        </motion.div>

        {/* Work Experience */}
        <motion.div variants={fadeUp} className="mb-12">
          <h2 className="text-[16px] text-ink mb-6 flex items-center gap-2" style={{ fontWeight: 500, lineHeight: 1.38 }}>
            <FontAwesomeIcon icon={faBriefcase} className="text-primary w-4 h-4" /> Work Experience
          </h2>

          <div className="relative">
            <div className="absolute left-[18px] top-2 bottom-2 w-px bg-hairline" />
            <div className="space-y-5">
              {roles.map((role) => {
                const prefix = `experience.roles.${role.key}`;
                return (
                  <motion.div key={role.key} variants={fadeUp} className="relative pl-12">
                    <div className="absolute left-3 top-2 w-2.5 h-2.5 rounded-full bg-primary border-2 border-surface-canvas z-10" />
                    <div className="card p-5">
                      <div className="flex items-start justify-between gap-3 flex-wrap">
                        <div>
                          <h3 className="text-[16px] text-ink" style={{ fontWeight: 500, lineHeight: 1.38 }}>
                            {t(`${prefix}.title`)}
                          </h3>
                          <p className="caption-text text-primary font-medium">{t(`${prefix}.org`)}</p>
                        </div>
                        <span className="tag-chip whitespace-nowrap">{t(`${prefix}.period`)}</span>
                      </div>
                      <div className="mt-1.5 flex flex-wrap gap-3 caption-text">
                        <span className="flex items-center gap-1"><FontAwesomeIcon icon={faClock} className="w-3 h-3" />{t(`${prefix}.type`)}</span>
                        <span className="flex items-center gap-1"><FontAwesomeIcon icon={faLocationDot} className="w-3 h-3" />{t(`${prefix}.location`)}</span>
                      </div>
                      <p className="mt-2 body-text leading-relaxed">{t(`${prefix}.description`)}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div variants={fadeUp} className="mb-12">
          <h2 className="text-[16px] text-ink mb-6 flex items-center gap-2" style={{ fontWeight: 500, lineHeight: 1.38 }}>
            <FontAwesomeIcon icon={faGraduationCap} className="text-primary w-4 h-4" /> {t('education.title')}
          </h2>
          <div className="space-y-4">
            {educationItems.map((item) => {
              const prefix = `education.items.${item}`;
              return (
                <motion.div key={item} variants={fadeUp} className="card p-5 flex items-start gap-4">
                  <div className="icon-box w-11 h-11 flex-shrink-0">
                    <FontAwesomeIcon icon={faGraduationCap} className="text-primary w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[16px] text-ink" style={{ fontWeight: 500, lineHeight: 1.38 }}>
                      {t(`${prefix}.degree`)}
                    </h3>
                    <p className="caption-text text-primary font-medium">{t(`${prefix}.school`)}</p>
                    <div className="mt-1 flex items-center gap-3 caption-text">
                      <span>{t(`${prefix}.period`)}</span>
                      <span className="badge-pill-outline text-[13px]">{t(`${prefix}.type`)}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Note */}
        <motion.div variants={fadeUp}>
          <div className="card-feature p-6 border-l-4 border-primary">
            <p className="body-text">
              <span className="font-medium text-primary">Started early.</span>{' '}
              Began coding at 13, built my first project at 14, and haven't stopped since. Every role
              since has been about turning curiosity into capability.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
