import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";

import { useSelector } from "react-redux";
import { RootState } from "../store";

import { motion } from "framer-motion";
import Head from "react-helmet";

import Navbar from "../components/navbar";

const ProjectsPage = () => {
    const navigate = useNavigate();
    const lang = useSelector((state: RootState) => state.page.lang.projects);

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
            className="min-h-screen flex flex-col items-center justify-center"

        >
            <Head>
                <title>{lang.pageTitle}</title>
            </Head>

            <div>
                <Particles init={particlesInit} className="particles" url="/particleConfig.json" />
            </div>

            <Navbar />

            <main className="mt-24 flex items-center justify-center flex-col w-full">
                <h1 className="text-4xl">{lang.title}</h1>

                <div className="flex items-center justify-center flex-1 flex-wrap md:w-1/2 w-11/12">
                    {projects.map((project: any) => {
                        return (
                            <a href={project.svn_url} target="_blank" rel="noreferrer" key={project.id} className="m-2 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all rounded-md md:w-5/12 w-11/12 h-36">
                                <div className="general-info">
                                    <h3 className="text-xl">{project.full_name}</h3>
                                    <p className="text-white/70">{project.language}</p>
                                </div>

                                <p className="description">{project.description ? project.description.slice(0, 70) + "..." : ""}</p>
                            </a>
                        );
                    })}
                </div>

                <br />
                <br />

                <button className="p-4 bg-white/10 hover:bg-white/20 rounded-md min-w-64 my-8 transition-all" onClick={() => switchPage("/")}>{lang.back}</button>
            </main>
        </motion.div>
    );
};

export default ProjectsPage;
