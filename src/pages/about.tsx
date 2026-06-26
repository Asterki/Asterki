import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faLink, faBookOpen, faTrophy, faHeart, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } } };

function SectionCard({ icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <motion.div variants={fadeUp} className="card p-6">
      <div className="flex items-start gap-4">
        <div className="icon-box w-10 h-10">
          <FontAwesomeIcon icon={icon} className="text-primary w-[18px] h-[18px]" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-[16px] text-ink mb-1.5" style={{ fontWeight: 500, lineHeight: 1.38 }}>{title}</h3>
          <div className="body-text space-y-2">{children}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <motion.div className="max-w-3xl mx-auto" variants={container} initial="hidden" animate="show">
        <motion.div variants={fadeUp} className="mb-10 text-center">
          <h1 className="section-heading">{t('about.title')}</h1>
          <p className="section-subtitle mx-auto">{t('about.subtitle')}</p>
        </motion.div>

        {/* Intro card with profile image */}
        <motion.div variants={fadeUp} className="card p-6 mb-6">
          <div className="flex flex-col md:flex-row items-start gap-5">
            <img
              src="/assets/images/icon.png"
              alt="Fernando Rivera"
              className="w-16 h-16 rounded-xl object-cover flex-shrink-0 ring-2 ring-primary/10"
            />
            <div>
              <p className="body-text leading-relaxed">{t('about.intro')}</p>
            </div>
          </div>
        </motion.div>

        {/* Quote — friendlier warm slab */}
        <motion.div variants={fadeUp} className="mb-6">
          <div className="ink-slab-warm rounded-2xl p-8 md:p-10">
            <div className="max-w-lg mx-auto text-center">
              <FontAwesomeIcon icon={faQuoteLeft} className="w-6 h-6 text-accent-orange/50 mx-auto mb-3" />
              <p className="text-[18px] text-white/85 leading-relaxed italic font-medium">
                &ldquo;{t('about.quote')}&rdquo;
              </p>
            </div>
          </div>
        </motion.div>

        {/* 2-column grid */}
        <div className="grid gap-4 md:grid-cols-2 mb-6">
          <SectionCard icon={faLightbulb} title={t('about.empowering_title')}><p>{t('about.empowering_text')}</p></SectionCard>
          <SectionCard icon={faLink} title={t('about.events_title')}><p>{t('about.events_text')}</p></SectionCard>
          <SectionCard icon={faBookOpen} title={t('about.philosophy_title')}><p>{t('about.philosophy_text')}</p></SectionCard>
          <SectionCard icon={faTrophy} title={t('about.goals_title')}><p>{t('about.goals_text')}</p></SectionCard>
        </div>

        {/* Acknowledgments */}
        <motion.div variants={fadeUp} className="card p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#fce4e9' }}>
              <FontAwesomeIcon icon={faHeart} className="text-primary w-[18px] h-[18px]" />
            </div>
            <div>
              <h3 className="text-[16px] text-ink mb-1.5" style={{ fontWeight: 500, lineHeight: 1.38 }}>{t('about.acknowledgments_title')}</h3>
              <p className="body-text">{t('about.acknowledgments_text')}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
