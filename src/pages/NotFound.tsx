import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-regular-svg-icons';

export default function NotFoundPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="page-container flex items-center justify-center min-h-[60vh]">
      <motion.div className="nord-slab-gradient rounded-2xl p-10 md:p-12 text-center max-w-md border border-[#4C566A]/30"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>
        <div className="icon-box w-20 h-20 rounded-lg mx-auto mb-5">
          <FontAwesomeIcon icon={faCompass} className="w-8 h-8" />
        </div>
        <div className="text-[72px] text-[#ECEFF4] mb-2" style={{ fontWeight: 500, lineHeight: 1.0 }}>404</div>
        <h2 className="text-[16px] text-[#D8DEE9] mb-2" style={{ fontWeight: 500, lineHeight: 1.38 }}>{t('404.title')}</h2>
        <p className="text-[14px] text-[#D8DEE9]/70 mb-8 leading-relaxed">{t('404.message')}</p>
        <button onClick={() => navigate('/')} className="btn-accent">{t('404.cta')}</button>
      </motion.div>
    </div>
  );
}
