import { createBrowserRouter } from 'react-router-dom';

// Pages
import IndexPage from './pages/index';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';

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
        path: "/contact",
        element: <ContactPage />,
    }
]);

export default router;
