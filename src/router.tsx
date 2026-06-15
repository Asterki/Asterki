import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import IndexPage from './pages/index';
import AboutPage from './pages/about';
import ProjectsPage from './pages/projects';
import SkillsPage from './pages/skills';
import ExperiencePage from './pages/experience';
import BlogPage from './pages/blog';
import ContactPage from './pages/contact';
import ServicesPage from './pages/services';
import NotFoundPage from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <IndexPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'skills', element: <SkillsPage /> },
      { path: 'experience', element: <ExperiencePage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export default router;
