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
        className="fixed top-4 left-4 z-50 lg:hidden p-2.5 rounded-hp-md bg-ink text-white">
        <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
      </button>

      {open && <div className="fixed inset-0 z-40 bg-black/60 lg:hidden" onClick={() => setOpen(false)} />}

      <aside className={`fixed top-0 left-0 z-40 h-full w-64 ink-slab border-r border-white/5 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
            <NavLink to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-hp-md flex items-center justify-center">
                <img
                  src="/assets/images/icon.png"
                  alt="Fernando Rivera"
                  className="w-8 h-8 rounded-hp-lg object-cover flex-shrink-0 shadow-soft-lift"
                />

              </div>
              <div>
                <div className="text-white font-medium text-[16px] leading-tight">Asterki</div>
                <div className="text-[12px] text-white/40 leading-tight">Developer & Advocate</div>
              </div>
            </NavLink>
            <button onClick={() => setOpen(false)} className="lg:hidden p-1 text-white/40 hover:text-white">
              <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 px-4 py-4 space-y-0.5 overflow-y-auto">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'}
                className={({ isActive }) =>
                  `block px-4 py-2.5 rounded-hp-md transition-all duration-150 text-[14px] leading-[1.5] ${isActive
                    ? 'text-primary font-medium bg-primary-soft/20'
                    : 'text-white/50 hover:text-white hover:bg-white/5'
                  }`
                }
                onClick={() => setOpen(false)}>
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
                  {t(item.labelKey)}
                </div>
              </NavLink>
            ))}
          </nav>

          <div className="px-4 py-4 border-t border-white/10">
            <LanguageSwitcher />
          </div>
        </div>
      </aside>
    </>
  );
}
