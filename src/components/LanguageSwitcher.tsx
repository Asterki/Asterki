import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const toggle = () => i18n.changeLanguage(i18n.language.startsWith('es') ? 'en' : 'es');

  return (
    <button onClick={toggle}
      aria-label={`Switch to ${i18n.language.startsWith('es') ? 'English' : 'Español'}`}
      className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[#D8DEE9]/40 hover:text-[#D8DEE9] hover:bg-white/5 transition-all text-[13px] font-medium">
      <FontAwesomeIcon icon={faLanguage} className="w-[14px] h-[14px]" />
      <span className="uppercase tracking-wider">{i18n.language.startsWith('es') ? 'EN' : 'ES'}</span>
    </button>
  );
}
