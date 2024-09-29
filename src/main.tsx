import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './i18n';

import { RouterProvider } from 'react-router-dom';
import router from './router';

import './styles/globals.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
