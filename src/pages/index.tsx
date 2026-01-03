import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';

import NavbarComponent from '../components/navbar';
import Particles from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';



const socialLinks = [
  {
    href: 'https://instagram.com/nicht.fer',
    icon: faInstagram,
    label: 'Instagram',
  },
  {
    href: 'https://github.com/Asterki',
    icon: faGithub,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/fernando-rivera-365b74270/',
    icon: faLinkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://medium.com/@asterki.dev',
    icon: faMedium,
    label: 'Medium',
  },
];

const LandingPage: React.FC = () => {
  const { t } = useTranslation('landing');
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();

  const [isReady, setIsReady] = React.useState(false);
  const [transitionTo, setTransitionTo] = React.useState('');
  const [showParticles, setShowParticles] = React.useState(true);

  const particlesInit = React.useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = React.useCallback(
    async (_container: Container | undefined) => {
      // noop
    },
    [],
  );

  React.useEffect(() => {
    const delay = prefersReducedMotion ? 0 : 600;
    const id = window.setTimeout(() => setIsReady(true), delay);
    return () => clearTimeout(id);
  }, [prefersReducedMotion]);

  React.useEffect(() => {
    if (!transitionTo) return;
    const id = window.setTimeout(() => {
      navigate(`/${transitionTo}`);
    }, 600);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transitionTo]);

  React.useEffect(() => {
    const update = () => setShowParticles(window.innerWidth >= 768);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const containerVariant = {
    hidden: { opacity: 0, y: 12 },
    enter: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const actionButton = (label: string, to?: string, onClick?: () => void) => (
    <button
      key={label}
      className="w-full rounded-md px-4 py-2 text-sm font-medium
                 bg-rose-600 text-white border-2 border-rose-600
                 hover:bg-transparent hover:text-rose-600
                 transition-all focus:outline-none focus:ring-2 focus:ring-rose-300"
      onClick={() => {
        if (onClick) onClick();
        else if (to) setTransitionTo(to);
      }}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen relative mt-32 bg-gradient-to-b from-white to-rose-50 dark:from-slate-900 dark:to-slate-800">
      <NavbarComponent isReady={isReady} transitionTo={transitionTo} />

      {showParticles && (
        <Particles
          id="tsparticles-landing"
          className="pointer-events-none absolute inset-0 z-0"
          url="/particleConfig.json"
          init={particlesInit}
          loaded={particlesLoaded}
        />
      )}

      <motion.main
        className="relative z-10 container mx-auto px-6 lg:px-12 py-20"
        initial="hidden"
        animate={isReady ? 'enter' : 'hidden'}
        variants={containerVariant}
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
          {/* Left: Identity / Hero */}
          <section className="w-full lg:w-1/2">
            <div className="rounded-2xl border border-rose-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 shadow-lg text-center">
              <img
                src="/assets/images/icon.png"
                alt="Personal icon"
                className="w-28 h-28 mx-auto rounded-full shadow mb-4"
              />

              <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-tr from-rose-700 to-orange-500">
                Fernando Rivera
              </h1>

              <p className="mt-2 text-gray-600 dark:text-gray-400 font-semibold">
                {t('subtitle')}
              </p>

              <p className="mt-4 italic text-sm text-gray-600 dark:text-gray-400">
                {t('quote')}
              </p>
            </div>

            {/* Social links */}
            <div className="mt-6 flex justify-center gap-6">
              {socialLinks.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="text-3xl text-rose-500 hover:text-rose-400 transition-colors"
                >
                  <FontAwesomeIcon icon={icon} />
                </a>
              ))}
            </div>
          </section>

          {/* Right: Actions */}
          <section className="w-full lg:w-1/2">
            <div className="rounded-2xl border border-rose-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 shadow-lg">
              <div className="grid gap-3">
                {actionButton(t('buttons.about'), 'about')}
                {actionButton(t('buttons.aboutasterki'), 'aboutasterki')}
                {actionButton(t('buttons.skills'), 'skills')}
                {actionButton(t('buttons.projects'), 'projects')}
                {actionButton(t('buttons.contact'), 'contact')}
                {actionButton(t('buttons.blog'), undefined, () =>
                  window.open('https://blog.asterki.xyz', '_blank'),
                )}
              </div>

              <p className="mt-6 text-xs text-center text-gray-500 dark:text-gray-400">
                Explore my work, learn what I do, or jump straight into my
                projects and writing.
              </p>
            </div>
          </section>
        </div>
      </motion.main>
    </div>
  );
};

export default LandingPage;
