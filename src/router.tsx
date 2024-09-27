import React from 'react'

import { createBrowserRouter } from "react-router-dom";

// Pages
import IndexPage from "./pages/index";
import AboutPage from "./pages/about";
import SkillsPage from "./pages/skills";
import ProjectsPage from "./pages/projects";
import ContactPage from "./pages/contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexPage />,
    },
    {
        path: "/about",
        element: <AboutPage />
    },
    {
        path: "/skills",
        element: <SkillsPage />
    },
    {
        path: "/projects",
        element: <ProjectsPage />
    },
    {
        path: "/contact",
        element: <ContactPage />
    }
]);

export default router;
