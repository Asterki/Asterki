import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faLink } from '@fortawesome/free-solid-svg-icons';

import Particles from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import NavbarComponent from '../components/navbar';

type Project = {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-rose-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-left">
        <h3 className="font-semibold text-gray-800 dark:text-gray-400">
          Asterki/{project.name}
          {project.language && (
            <span className="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400">
              · {project.language}
            </span>
          )}
        </h3>

        <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">
          {project.description || 'No description provided'}
        </p>
      </div>

      <a
        href={project.html_url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${project.name} on GitHub`}
        className="inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 bg-rose-600 text-white border-2 border-rose-600 hover:bg-transparent hover:text-rose-600 transition-all"
      >
        <FontAwesomeIcon icon={faLink} />
        <span className="text-sm">Repo</span>
      </a>
    </div>
  );
};

const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('projects');
  const prefersReducedMotion = useReducedMotion();

  const [isReady, setIsReady] = React.useState(false);
  const [transitionTo, setTransitionTo] = React.useState('');
  const [projects, setProjects] = React.useState<Project[]>([]);
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
    fetch('https://api.github.com/users/asterki/repos')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

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

  const containerVariant = {
    hidden: { opacity: 0, y: 10 },
    enter: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen mt-32 relative bg-gradient-to-b from-white to-rose-50 dark:from-slate-900 dark:to-slate-800">
      <NavbarComponent isReady={isReady} transitionTo={transitionTo} />

      {showParticles && (
        <Particles
          id="tsparticles-projects"
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
        aria-labelledby="projects-heading"
      >
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-rose-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-lg">
            <header className="mb-6 text-center">
              <h1
                id="projects-heading"
                className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-rose-700 to-orange-500"
              >
                {t('projects_title')}
              </h1>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
                {t('projects_text')}
              </p>
            </header>

            <section className="flex flex-col gap-4">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </section>

            <div className="mt-8 flex justify-center">
              <button
                className="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-rose-600 text-white border-2 border-rose-600 hover:bg-transparent hover:text-rose-600 transition-all focus:outline-none focus:ring-2 focus:ring-rose-300"
                onClick={() => setTransitionTo('home')}
              >
                <FontAwesomeIcon icon={faChevronCircleLeft} />
                {t('return_button')}
              </button>
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default ProjectsPage;
