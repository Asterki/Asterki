import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

interface Project {
  key: string;
  tags: string[];
  github?: string;
  image?: string;
}

const projects: Project[] = [
  {
    key: 'census',
    tags: ['React', 'Maps', 'Data Viz'],
    github: 'https://github.com/Asterki/bus-routes',
    image: '/images/projects/censo.jpeg',
  },
  {
    key: 'editor',
    tags: ['React', 'GPS', 'Real-time', 'IoT'],
    github: 'https://github.com/Asterki/bus-routes',
    image: '/images/projects/editor.jpeg',
  },
  {
    key: 'expedientes',
    tags: ['RBAC/ABAC', 'Security', 'Healthcare'],
    image: '/images/projects/expedientes.png',
  },
  {
    key: 'pumai',
    tags: ['LLM', 'RAG', 'MCP', 'AI'],
    github: 'https://github.com/Asterki/pumai',
    image: '/images/projects/pumai.jpeg',
  },
  { key: 'curc', tags: ['Web Dev', 'UX', 'Accessibility'], image: '/images/projects/curc.jpeg' },
  {
    key: 'personal',
    tags: ['React', 'Vite', 'Tailwind', 'TypeScript'],
    github: 'https://github.com/Asterki/asterki',
    image: '/images/projects/personal.png',
  },
  {
    key: 'flashet',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/Asterki/flashet',
    image: '/images/projects/flashet.jpeg',
  },
  {
    key: 'zappit',
    tags: ['Next.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Asterki/Zappit',
    image: '/images/projects/zappit.jpg',
  },
  {
    key: 'songsurf',
    tags: ['Next.js', 'pandas', 'Spotify API'],
    github: 'https://github.com/Asterki/songsurf',
    image: '/images/projects/songsurf.jpeg',
  },
  {
    key: 'ascloud',
    tags: ['Next.js', 'MongoDB', 'Cloud'],
    github: 'https://github.com/Asterki/ascloud',
    image: '/images/projects/ascloud.jpeg',
  },
  {
    key: 'miichi',
    tags: ['Arduino', 'IoT', 'Robotics'],
    github: 'https://github.com/Asterki',
    image: '/images/projects/miichi.webp',
  },
  {
    key: 'dimlim',
    tags: ['Next.js', 'E2EE', 'Real-time'],
    github: 'https://github.com/Asterki/dimlim',
    image: '/images/projects/dimlim.jpeg',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

export default function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeUp} className="mb-10 text-center">
          <h1 className="section-heading">{t('projects.title')}</h1>
          <p className="section-subtitle mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const prefix = `projects.items.${project.key}`;
            return (
              <motion.article
                key={project.key}
                variants={fadeUp}
                className="card p-6 flex flex-col"
              >
                <div className="w-full h-32 rounded-soft bg-[#D8DEE9] mb-4 flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={t(`${prefix}.name`)}
                      className="w-full h-full object-cover rounded-soft"
                    />
                  ) : (
                    <span className="text-[#4C566A] caption-text">
                      {t('projects.noImage')}
                    </span>
                  )}
                </div>

                <div className="caption-text uppercase tracking-wider mb-1">
                  {t(`${prefix}.org`)}
                </div>
                <h3
                  className="text-[20px] text-[#2E3440] mb-1"
                  style={{ fontWeight: 500, lineHeight: 1.0 }}
                >
                  {t(`${prefix}.name`)}
                </h3>
                <div className="flex items-center gap-1.5 caption-text mb-3">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="w-3 h-3"
                  />
                  <span>{t(`${prefix}.period`)}</span>
                </div>
                <p className="body-text mb-4 flex-1">
                  {t(`${prefix}.description`)}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-text-link"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="w-4 h-4"
                    />{' '}
                    {t('projects.source')}
                  </a>
                )}
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
