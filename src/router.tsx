import { createBrowserRouter } from 'react-router-dom';

// Pages
import IndexPage from './pages/index';
import AboutPage from './pages/about';

const router = createBrowserRouter([
    {
        path: '/',
        element: <IndexPage />,
    },
    {
        path: '/about',
        element: <AboutPage />,
    },
]);

export default router;
