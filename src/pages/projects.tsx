import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";

import { motion } from "framer-motion";
import Head from "react-helmet";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

import "../styles/projects.scss";

const ProjectsPage = () => {
    const navigate = useNavigate();

    const [isTransitioning, setIsTransitioning] = React.useState(false);
    const [projects, setProjects] = React.useState([] as any);

    const particlesInit = React.useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const switchPage = (page: string) => {
        setIsTransitioning(true);

        setTimeout(() => {
            navigate(page);
        }, 300);
    };

    React.useEffect(() => {
        (async () => {
            try {
                const response = await axios({
                    method: "GET",
                    url: "https://api.github.com/users/asterki/repos",
                });

                setProjects(response.data);
            } catch (err: unknown) {
                alert("There was an error trying to load the repositories");
            }
        })();
    });

    return (
        <motion.div
            variants={{ shown: { opacity: 1 }, hidden: { opacity: 0 } }}
            transition={{ duration: 0.3 }}
            initial="hidden"
            animate={isTransitioning == false ? "shown" : "hidden"}
            className="projects-page"
        >
            <Head>
                <title>Asterki Dev | Projects</title>
            </Head>

            <div>
                <Particles init={particlesInit} className="particles" url="/particleConfig.json" />
            </div>

            <Navbar />

            <main>
                <h1>My Projects</h1>

                <div className="projects">
                    {projects.map((project: any) => {
                        return (
                            <a href={project.svn_url} target="_blank" rel="noreferrer" key={project.id} className="project">
                                <div className="general-info">
                                    <h3>{project.full_name}</h3>
                                    <p>{project.language}</p>
                                </div>

                                <p className="description">{project.description}</p>
                            </a>
                        );
                    })}
                </div>

                <br />
                <br />

                <button onClick={() => switchPage("/")}>Go back</button>
            </main>

            <Footer />
        </motion.div>
    );
};

export default ProjectsPage;
