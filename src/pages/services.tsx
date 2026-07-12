import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass, faHammer, faGears, faGraduationCap,
  faHandshake, faArrowRight, faShield,
} from '@fortawesome/free-solid-svg-icons';

const steps = [
  { key: 'detect', icon: faMagnifyingGlass },
  { key: 'diagnose', icon: faHammer },
  { key: 'deliver', icon: faGears },
];

const servicesList = [
  { key: 'audit', icon: faMagnifyingGlass },
  { key: 'build', icon: faHammer },
  { key: 'integrate', icon: faGears },
  { key: 'train', icon: faGraduationCap },
  { key: 'maintain', icon: faHandshake },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

export default function ServicesPage() {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <motion.div className="max-w-5xl mx-auto" variants={container} initial="hidden" animate="show">

        <motion.div variants={fadeUp} className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#88C0D0]/10 border border-[#88C0D0]/30 text-[#5E81AC] text-[13px] font-medium mb-4">
            <FontAwesomeIcon icon={faShield} className="w-3.5 h-3.5" />
            Asterki Dev
          </div>
          <h1 className="section-heading">{t('services.title')}</h1>
          <p className="section-subtitle mx-auto max-w-2xl">{t('services.subtitle')}</p>
        </motion.div>

        <motion.div variants={fadeUp} className="mb-16">
          <h2 className="text-[22px] text-[#2E3440] mb-6 text-center" style={{ fontWeight: 500, lineHeight: 1.1 }}>
            {t('services.model_title')}
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.key} className="card p-6 text-center relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 translate-y-1/2 z-10 text-[#4C566A]/30">
                    <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5" />
                  </div>
                )}
                <div className="w-12 h-12 rounded-lg bg-[#D8DEE9] flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={step.icon} className="w-5 h-5 text-[#5E81AC]" />
                </div>
                <h3 className="text-[17px] text-[#2E3440] mb-1" style={{ fontWeight: 500 }}>
                  {t(`services.model_steps.${step.key}.name`)}
                </h3>
                <p className="body-text text-[14px]">
                  {t(`services.model_steps.${step.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="mb-16">
          <h2 className="text-[22px] text-[#2E3440] mb-6 text-center" style={{ fontWeight: 500, lineHeight: 1.1 }}>
            {t('services.services_title')}
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {servicesList.map((svc) => (
              <div key={svc.key} className="card p-5">
                <div className="w-10 h-10 rounded-lg bg-[#D8DEE9] flex items-center justify-center mb-3">
                  <FontAwesomeIcon icon={svc.icon} className="w-4 h-4 text-[#5E81AC]" />
                </div>
                <h3 className="text-[16px] text-[#2E3440] mb-1" style={{ fontWeight: 500, lineHeight: 1.2 }}>
                  {t(`services.services_list.${svc.key}.name`)}
                </h3>
                <p className="body-text text-[13px]">
                  {t(`services.services_list.${svc.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="nord-slab-gradient rounded-2xl p-8 text-center max-w-xl mx-auto border border-[#4C566A]/30">
          <h2 className="text-[20px] text-[#ECEFF4] mb-2" style={{ fontWeight: 500, lineHeight: 1.1 }}>
            {t('services.cta_title')}
          </h2>
          <p className="text-[14px] text-[#D8DEE9]/70 mb-5 max-w-md mx-auto leading-relaxed">
            {t('services.cta_desc')}
          </p>
          <a
            href="mailto:asterki.dev@proton.me"
            className="btn-accent inline-flex items-center gap-2"
          >
            {t('services.cta_button')}
            <FontAwesomeIcon icon={faArrowRight} className="w-3.5 h-3.5" />
          </a>
        </motion.div>

      </motion.div>
    </div>
  );
}
