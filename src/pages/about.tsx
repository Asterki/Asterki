import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark,
  faLightbulb,
} from '@fortawesome/free-regular-svg-icons';
import {
  faBook,
  faChevronCircleLeft,
  faLink,
  faTrophy,
  faCircleUser,
} from '@fortawesome/free-solid-svg-icons';

import Particles from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import NavbarComponent from '../components/navbar';

const Section: React.FC<{
  icon: any;
  title: string;
  children: React.ReactNode;
}> = ({ icon, title, children }) => (
  <article className="w-full">
    <h3 className="flex items-center gap-3 text-lg md:text-xl font-semibold mb-2">
      <span
        aria-hidden
        className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-600 to-orange-400 text-white shadow"
      >
        <FontAwesomeIcon icon={icon} />
      </span>
      <span>{title}</span>
    </h3>
    <div className="prose prose-sm md:prose-base dark:prose-invert text-slate-700">
      {children}
    </div>
  </article>
);

const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('about');

  const [isReady, setIsReady] = React.useState(false);
  const [transitionTo, setTransitionTo] = React.useState('');
  const [showParticles, setShowParticles] = React.useState(true);

  const prefersReducedMotion = useReducedMotion();

  const particlesInit = React.useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = React.useCallback(
    async (_container: Container | undefined) => {
      // intentionally minimal for production
      // console.debug('particles loaded', container);
    },
    [],
  );

  // small delay to allow navbar & page chrome to settle — make shorter and respect reduced motion
  React.useEffect(() => {
    const delay = prefersReducedMotion ? 0 : 600;
    const id = window.setTimeout(() => setIsReady(true), delay);
    return () => clearTimeout(id);
  }, [prefersReducedMotion]);

  // navigation after triggering transition (keeps existing Navbar integration)
  React.useEffect(() => {
    if (!transitionTo) return;
    const id = window.setTimeout(() => {
      if (transitionTo === 'home') navigate('/');
      else navigate(`/${transitionTo}`);
    }, 600);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transitionTo]);

  // only show particles on larger viewports for perf
  React.useEffect(() => {
    const update = () => {
      setShowParticles(window.innerWidth >= 768);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // motion variants
  const containerVariant = {
    hidden: { opacity: 0, y: 12 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.35 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.995 },
    enter: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.55, delay: 0.1, ease: 'easeOut' },
    },
  };

  // helper to render the founder paragraph that uses multiple translation keys
  const founderParagraph = (
    <>
      {t('founder_text1')}{' '}
      <em className="not-italic">{t('founder_text2')}</em> {t('founder_text3')}{' '}
      <br />
      <strong>{t('founder_text4')}</strong>
    </>
  );

  return (
    <div className="min-h-screen relative bg-gradient-to-b mt-20 bg-white dark:text-white text-black from-white to-rose-50 dark:from-slate-900 dark:to-slate-800">
      <NavbarComponent isReady={isReady} transitionTo={transitionTo} />

      {/* Particles: rendered behind content only on medium+ screens for performance */}
      {showParticles && (
        <Particles
          id="tsparticles-about"
          className="pointer-events-none absolute inset-0 z-0"
          url="/particleConfig.json"
          init={particlesInit}
          loaded={particlesLoaded}
        />
      )}

      <motion.main
        className="relative z-10 container mx-auto px-6 lg:px-12 py-16"
        initial="hidden"
        animate={isReady ? 'enter' : 'hidden'}
        variants={containerVariant}
        aria-labelledby="about-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left column: profile + CTA */}
            <motion.aside
              className="flex-shrink-0 w-full lg:w-1/3"
              variants={cardVariant}
            >
              <div className="rounded-2xl border border-rose-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div
                    className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-tr from-rose-600 to-orange-400 text-white text-3xl shadow-md"
                    aria-hidden
                  >
                    <FontAwesomeIcon icon={faCircleUser} />
                  </div>

                  <div>
                    <h1 id="about-heading" className="text-2xl font-bold">
                      {t('title')}
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-300 mt-1">
                      Developer • Workshop instructor • Community builder
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                  {t('introduction_text')}
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <button
                    className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 bg-rose-700 text-white text-sm font-medium shadow hover:scale-[1.02] transition-transform focus:outline-none focus:ring-2 focus:ring-rose-300"
                    onClick={() => setTransitionTo('home')}
                    aria-label="Go back to landing page"
                  >
                    <FontAwesomeIcon icon={faChevronCircleLeft} />
                    {t('footer_button')}
                  </button>

                  <a
                    className="text-center text-xs text-slate-500 hover:text-slate-700 underline"
                    href="#events"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById('events');
                      if (el) el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
                    }}
                  >
                    Jump to events & community
                  </a>
                </div>
              </div>

              {/* quick stats / microcards */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-white dark:bg-slate-900 p-3 border border-rose-100 dark:border-slate-700 text-center shadow-sm">
                  <div className="text-2xl font-semibold">+100</div>
                  <div className="text-xs text-slate-500">Local students</div>
                </div>
                <div className="rounded-lg bg-white dark:bg-slate-900 p-3 border border-rose-100 dark:border-slate-700 text-center shadow-sm">
                  <div className="text-2xl font-semibold">+300</div>
                  <div className="text-xs text-slate-500">Worldwide participants</div>
                </div>
              </div>
            </motion.aside>

            {/* Right column: content sections */}
            <motion.section
              className="w-full lg:w-2/3"
              variants={cardVariant}
              aria-live="polite"
            >
              <div className="rounded-2xl border border-rose-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-lg">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <Section icon={faLightbulb} title={t('empowering_title')}>
                      <p className="dark:text-gray-300" >{t('empowering_text')}</p>
                    </Section>
                  </div>

                  <Section icon={faBookmark} title={t('founder_title')}>
                    <p className="dark:text-gray-300">{founderParagraph}</p>
                  </Section>

                  <div id="events">
                    <Section icon={faLink} title={t('events_title')}>
                      <p className="dark:text-gray-300">
                        {t('events_text1')}{' '}
                        <strong>{t('events_text2')}</strong>
                        {t('events_text3')}{' '}
                        <em>{t('events_text4')}</em>
                        {t('events_text5')}
                      </p>

                      <p className="mt-3 dark:text-gray-300">{t('events_text6')}</p>

                      <div className="mt-4 grid gap-2">
                        <span className="text-xs text-slate-500 dark:text-slate-400 ">
                          I also teach at my university: from Inducción Digital Puma (tech literacy for new students) to deeper courses on tools and field-specific topics.
                        </span>
                      </div>
                    </Section>
                  </div>

                  <Section icon={faBook} title={t('philosophy_title')}>
                    <p className="dark:text-gray-300">
                      {t('philosophy_text1')}{' '}
                      <em>{t('philosophy_text2')}</em>{' '}
                      {t('philosophy_text3')}
                    </p>
                    <blockquote className="mt-3 border-l-4 border-rose-300 pl-3 italic text-slate-600 dark:text-slate-300">
                      {t('quote')}
                    </blockquote>
                  </Section>

                  <Section icon={faTrophy} title={t('future_goals_title')}>
                    <p className="dark:text-gray-300">
                      {t('future_goals_text1')}{' '}
                      <strong>{t('future_goals_text2')}</strong>{' '}
                      {t('future_goals_text3')}
                    </p>
                  </Section>
                </div>

                {/* acknowledgments */}
                <div className="mt-6 border-t pt-4 text-sm text-slate-600 dark:text-slate-300">
                  <strong>{t('acknowledgments_title')}</strong>
                  <p className="mt-2">{t('acknowledgments_text')}</p>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default AboutPage;
