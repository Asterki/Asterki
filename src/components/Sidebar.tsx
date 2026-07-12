import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse, faUser, faCode, faWrench, faBriefcase, faEnvelope, faBlog, faClipboardList,
  faBars, faXmark,
} from '@fortawesome/free-solid-svg-icons';
import LanguageSwitcher from './LanguageSwitcher';

const navItems = [
  { to: '/', icon: faHouse, labelKey: 'nav.home' },
  { to: '/about', icon: faUser, labelKey: 'nav.about' },
  { to: '/projects', icon: faCode, labelKey: 'nav.projects' },
  { to: '/skills', icon: faWrench, labelKey: 'nav.skills' },
  { to: '/experience', icon: faBriefcase, labelKey: 'nav.experience' },
  { to: '/services', icon: faClipboardList, labelKey: 'nav.services' },
  { to: '/blog', icon: faBlog, labelKey: 'nav.blog' },
  { to: '/contact', icon: faEnvelope, labelKey: 'nav.contact' },
];

export default function Sidebar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} aria-label="Open navigation"
        className="fixed top-4 left-4 z-50 lg:hidden p-2.5 rounded-lg bg-[#2E3440] text-[#D8DEE9] shadow-lg">
        <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
      </button>

      {open && <div className="fixed inset-0 z-40 bg-[#2E3440]/80 lg:hidden" onClick={() => setOpen(false)} />}

      <aside className={`fixed top-0 left-0 z-40 h-full w-64 nord-slab-gradient border-r border-[#4C566A]/20 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-6 border-b border-[#4C566A]/30">
            <NavLink to="/" onClick={() => setOpen(false)} className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center overflow-hidden ring-2 ring-[#88C0D0]/30 group-hover:ring-[#88C0D0]/60 transition-all duration-200">
                <img
                  src="/assets/images/icon.png"
                  alt="Fernando Rivera"
                  className="w-9 h-9 object-cover"
                />
              </div>
              <div>
                <div className="text-[#ECEFF4] font-semibold text-[16px] leading-tight">Asterki</div>
                <div className="text-[12px] text-[#D8DEE9]/40 leading-tight font-medium">Developer & Advocate</div>
              </div>
            </NavLink>
            <button onClick={() => setOpen(false)} className="lg:hidden p-1 text-[#D8DEE9]/40 hover:text-[#ECEFF4] transition-colors">
              <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'}
                className={({ isActive }) =>
                  `block px-4 py-2.5 rounded-lg transition-all duration-200 text-[14px] leading-[1.5] ${
                    isActive
                      ? 'bg-[#88C0D0]/15 text-[#88C0D0] font-semibold shadow-sm'
                      : 'text-[#D8DEE9]/45 hover:text-[#D8DEE9] hover:bg-white/5'
                  }`
                }
                onClick={() => setOpen(false)}>
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
                  <span className="flex-1">{t(item.labelKey)}</span>
                </div>
              </NavLink>
            ))}
          </nav>

          <div className="px-4 py-4 border-t border-[#4C566A]/30">
            <LanguageSwitcher />
          </div>
        </div>
      </aside>
    </>
  );
}
