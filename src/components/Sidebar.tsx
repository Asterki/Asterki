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
        className="fixed top-4 left-4 z-50 lg:hidden p-2.5 rounded-xl bg-[#1b1417] text-white shadow-lg">
        <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
      </button>

      {open && <div className="fixed inset-0 z-40 bg-black/60 lg:hidden" onClick={() => setOpen(false)} />}

      <aside className={`fixed top-0 left-0 z-40 h-full w-64 ink-slab-warm border-r border-white/5 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Logo area */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
            <NavLink to="/" onClick={() => setOpen(false)} className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden ring-2 ring-white/10 group-hover:ring-primary/40 transition-all duration-200">
                <img
                  src="/assets/images/icon.png"
                  alt="Fernando Rivera"
                  className="w-9 h-9 object-cover"
                />
              </div>
              <div>
                <div className="text-white font-semibold text-[16px] leading-tight">Asterki</div>
                <div className="text-[12px] text-white/40 leading-tight font-medium">Developer & Advocate</div>
              </div>
            </NavLink>
            <button onClick={() => setOpen(false)} className="lg:hidden p-1 text-white/40 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'}
                className={({ isActive }) =>
                  `block px-4 py-2.5 rounded-xl transition-all duration-200 text-[14px] leading-[1.5] ${
                    isActive
                      ? 'bg-primary/20 text-primary font-semibold shadow-sm'
                      : 'text-white/45 hover:text-white hover:bg-white/5'
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

          {/* Language switcher */}
          <div className="px-4 py-4 border-t border-white/10">
            <LanguageSwitcher />
          </div>
        </div>
      </aside>
    </>
  );
}
