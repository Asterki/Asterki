import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCalendar, faRss } from '@fortawesome/free-solid-svg-icons';

interface BlogPost { title: string; date: string; description: string; slug: string; }

const blogPosts: BlogPost[] = [
  {
    title: 'Building in Public: A Week of Side Projects', date: '2026-06-14',
    description: 'What happens when curiosity wins over planning — a recap of seven days, three prototypes, and two all-nighters.', slug: 'building-in-public'
  },
  {
    title: 'Welcome to the Asterki Blog', date: '2026-06-14',
    description: 'Hello and welcome — here\'s what this blog is about and what you can expect.', slug: 'welcome'
  },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const fadeUp = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } } };

export default function BlogPage() {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <motion.div className="max-w-3xl mx-auto" variants={container} initial="hidden" animate="show">
        <motion.div variants={fadeUp} className="mb-10 text-center">
          <h1 className="section-heading">{t('blog.title')}</h1>
          <p className="section-subtitle mx-auto">{t('blog.subtitle')}</p>
        </motion.div>

        {blogPosts.length > 0 ? (
          <div className="space-y-4">
            {blogPosts.map((post) => (
              <motion.article key={post.slug} variants={fadeUp}
                className="card p-5 hover:shadow-soft-lift transition-shadow group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h2 className="text-[16px] text-ink group-hover:text-primary transition-colors"
                      style={{ fontWeight: 500, lineHeight: 1.38 }}>
                      {post.title}
                    </h2>
                    <div className="flex items-center gap-1.5 mt-1 caption-text">
                      <FontAwesomeIcon icon={faCalendar} className="w-3 h-3" />
                      <span>{t('blog.published')} {new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <p className="mt-2 body-text">{post.description}</p>
                  </div>
                  {/* Opens Hugo blog in new tab */}
                  <a href={`/blog/${post.slug}.html`} target="_blank" rel="noopener noreferrer"
                    className="flex-shrink-0 p-2 rounded-hp-md text-text-graphite hover:text-primary hover:bg-primary-soft transition-all"
                    aria-label={t('blog.read_more')}>
                    <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <motion.div variants={fadeUp} className="warm-band rounded-2xl p-8 text-center border border-primary/10">
            <div className="icon-box w-14 h-14 rounded-hp-lg mx-auto mb-4">
              <FontAwesomeIcon icon={faRss} className="text-primary w-6 h-6" />
            </div>
            <h3 className="text-[16px] text-ink mb-2" style={{ fontWeight: 500, lineHeight: 1.38 }}>
              {t('blog.no_posts')}
            </h3>
            <p className="body-text">Writing is in progress. Check back soon.</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
