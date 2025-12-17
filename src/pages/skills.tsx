import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

import Particles from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import NavbarComponent from '../components/navbar';

type Skill = { name: string; icon: string };

const SkillCard: React.FC<Skill> = React.memo(({ icon, name }) => {
  return (
    <div
      className="flex items-center gap-3 p-3 rounded-lg border border-rose-100 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm transform hover:-translate-y-0.5 transition-transform"
      role="listitem"
    >
      <img
        src={icon}
        alt={`${name} logo`}
        width={40}
        height={40}
        loading="lazy"
        className="w-10 h-10 object-contain"
      />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-400">
        {name}
      </span>
    </div>
  );
});
SkillCard.displayName = 'SkillCard';

const SkillsPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('skills');

  const prefersReducedMotion = useReducedMotion();

  const [isReady, setIsReady] = React.useState(false);
  const [transitionTo, setTransitionTo] = React.useState('');
  const [showParticles, setShowParticles] = React.useState(true);

  const particlesInit = React.useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = React.useCallback(
    async (_container: Container | undefined) => {
      /* noop */
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
      if (transitionTo === 'home') navigate('/');
      else navigate(`/${transitionTo}`);
    }, prefersReducedMotion ? 0 : 600);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transitionTo]);

  React.useEffect(() => {
    const update = () => setShowParticles(window.innerWidth >= 768);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const skills: Record<string, Skill[]> = {
    'Programming Languages': [
      {
        name: 'TypeScript',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
      },
      {
        name: 'Rust',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg',
      },
      {
        name: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      },
      {
        name: 'JavaScript',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
      },
    ],
    'Frontend Frameworks & Libraries': [
      {
        name: 'React.js',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
      },
      {
        name: 'Next.js',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
      },
      {
        name: 'Redux',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
      },
      {
        name: 'TailwindCSS',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg',
      },
      {
        name: 'MUI',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg',
      },
      {
        name: 'SCSS',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
      },
    ],
    'Backend & APIs': [
      {
        name: 'Node.js',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
      },
      {
        name: 'Express',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
      },
      {
        name: 'Fastify',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/fastify/fastify-original.svg',
      },
      {
        name: 'Flask',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg',
      },
      {
        name: 'Socket.io',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/socketio/socketio-original.svg',
      },
      {
        name: 'Firebase',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg',
      },
    ],
    'Databases & Storage': [
      {
        name: 'PostgreSQL',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
      },
      {
        name: 'MySQL',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
      },
      {
        name: 'MongoDB',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
      },
      {
        name: 'Redis',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg',
      },
      {
        name: 'SQLite',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sqlite/sqlite-original.svg',
      },
    ],
    'Tools & Platforms': [
      {
        name: 'VSCode',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg',
      },
      {
        name: 'Docker',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
      },
      {
        name: 'Kubernetes',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg',
      },
      {
        name: 'Figma',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg',
      },
      {
        name: 'Postman',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg',
      },
      {
        name: 'Linux',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg',
      },
    ],
    'Data Science & ML': [
      {
        name: 'NumPy',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg',
      },
      {
        name: 'Pandas',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg',
      },
      {
        name: 'scikit-learn',
        icon: 'https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png',
      },
    ],
  };

  const containerVariant = {
    hidden: { opacity: 0, y: 8 },
    enter: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: 'easeOut' },
    },
  };

  const sectionVariant = {
    hidden: { opacity: 0, y: 6 },
    enter: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.06, duration: 0.45 },
    }),
  };

  return (
    <div className="min-h-screen relative mt-32 bg-gradient-to-b from-white to-rose-50 dark:from-slate-900 dark:to-slate-800">
      <NavbarComponent isReady={isReady} transitionTo={transitionTo} />

      {showParticles && (
        <Particles
          id="tsparticles-skills"
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
        aria-labelledby="skills-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: heading + intro */}
            <motion.aside
              className="w-full lg:w-1/4"
              variants={sectionVariant}
              custom={0}
            >
              <div className="rounded-2xl border border-rose-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-lg">
                <h1
                  id="skills-heading"
                  className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-rose-700 to-orange-500"
                >
                  {t('title')}
                </h1>
                <p className="mt-3 text-sm text-gray-700 dark:text-gray-400">
                  {t('introduction') ?? t('subtitle') ?? ''}
                </p>

                <div className="mt-6">
                  <button
                    className="inline-flex items-center gap-2 rounded-md px-3 py-2 bg-rose-600 text-white text-sm font-medium border-2 border-rose-600 hover:bg-transparent hover:text-rose-600 transition-all focus:outline-none focus:ring-2 focus:ring-rose-300"
                    onClick={() => setTransitionTo('home')}
                    aria-label="Go back to home"
                  >
                    <FontAwesomeIcon icon={faChevronCircleLeft} />
                    {t('footer_button')}
                  </button>
                </div>
              </div>
            </motion.aside>

            {/* Right: skills grid */}
            <motion.section
              className="w-full lg:w-3/4"
              variants={sectionVariant}
              custom={1}
            >
              <div className="rounded-2xl border border-rose-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-lg">
                <div className="flex flex-col gap-8">
                  {Object.entries(skills).map(([category, list], idx) => (
                    <motion.div
                      key={category}
                      initial="hidden"
                      animate="enter"
                      variants={sectionVariant}
                      custom={idx + 1}
                      className="space-y-3"
                    >
                      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-400">
                        {category}
                      </h2>

                      <div
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
                        role="list"
                        aria-label={category}
                      >
                        {list.map((skill) => (
                          <SkillCard
                            key={skill.name}
                            name={skill.name}
                            icon={skill.icon}
                          />
                        ))}
                      </div>
                    </motion.div>
                  ))}

                  <div className="pt-4 border-t border-rose-100 dark:border-slate-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t('note') ??
                        'This is a curated list of tools and technologies I use frequently — I keep learning and updating it as I work on new projects.'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default SkillsPage;
