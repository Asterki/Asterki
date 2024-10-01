import { createBrowserRouter } from 'react-router-dom';

// Pages
import IndexPage from './pages/index';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import ProjectsPage from './pages/projects';
import AboutAsterkiPage from './pages/aboutasterki';
import SkillsPage from './pages/skills';

const router = createBrowserRouter([
    {
        path: '/',
        element: <IndexPage />,
    },
    {
        path: '/about',
        element: <AboutPage />,
    },
    {
        path: '/contact',
        element: <ContactPage />,
    },
    {
        path: '/projects',
        element: <ProjectsPage />,
    },
    {
        path: '/aboutasterki',
        element: <AboutAsterkiPage />,
    },
    {
        path: "/skills",
        element: <SkillsPage />,
    }
]);

export default router;
