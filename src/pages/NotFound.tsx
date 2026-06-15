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
      <motion.div className="text-center max-w-md" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <div className="icon-box w-20 h-20 rounded-hp-lg mx-auto mb-5">
          <FontAwesomeIcon icon={faCompass} className="text-primary w-8 h-8" />
        </div>
        <div className="text-[72px] text-ink mb-2" style={{ fontWeight: 500, lineHeight: 1.0 }}>404</div>
        <h2 className="text-[16px] text-ink mb-2" style={{ fontWeight: 500, lineHeight: 1.38 }}>{t('404.title')}</h2>
        <p className="body-text mb-8">{t('404.message')}</p>
        <button onClick={() => navigate('/')} className="btn-primary">{t('404.cta')}</button>
      </motion.div>
    </div>
  );
}
