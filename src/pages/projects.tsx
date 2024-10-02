import * as React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faLink } from '@fortawesome/free-solid-svg-icons';

import Particles from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import NavbarComponent from '../components/navbar';

const ProjectsPage = () => {
    const navigate = useNavigate();

    const [isReady, setIsReady] = React.useState(false);
    const [transitionTo, setTransitionTo] = React.useState('');

    const [projects, setProjects] = React.useState<
        {
            id: number;
            name: string;
            description: string;
            language: string;
            html_url: string;
        }[]
    >([]);

    const particlesInit = React.useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = React.useCallback(
        async (container: Container | undefined) => {
            await console.log(container);
        },
        [],
    );

    React.useEffect(() => {
        setTimeout(() => {
            setIsReady(true);
        }, 1000);

        fetch('https://api.github.com/users/asterki/repos')
            .then((res) => res.json())
            .then((data) => {
                setProjects(data);
            });
    }, []);

    React.useEffect(() => {
        if (transitionTo !== '') {
            setTimeout(() => {
                if (transitionTo === 'home') {
                    navigate('/');
                } else {
                    navigate(`/${transitionTo}`);
                }
            }, 1000);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [transitionTo]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <NavbarComponent isReady={isReady} transitionTo={transitionTo} />
            

            <motion.div
                className="flex items-center justify-center w-full flex-col opacity-0 z-10 mt-32"
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.6 }}
            >
                <main className="flex md:flex-row flex-col gap-4 items-center justify-around md:mt-0 mt-24 mb-24 w-full">
                    <section className="text-gray-700 flex items-center justify-center flex-col bg-white border-2 border-rose-500 p-6 rounded-md shadow-md w-11/12 md:w-9/12 text-center">
                        <h1 className="text-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-rose-700 to-orange-500 w-full">
                            My Projects
                        </h1>
                        <p>
                            Here are some of the projects I have worked on.
                            coming from my GitHub repositories.
                        </p>

                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="flex items-center justify-between bg-white border-2 border-rose-500 p-4 rounded-md shadow-md w-11/12 md:w-9/12 text-center mt-4"
                            >
                                <div>
                                    <h2 className="text-left w-full font-bold">
                                        Asterki/{project.name} -{' '}
                                        {project.language}
                                    </h2>
                                    <p className="text-left w-full">
                                        {project.description
                                            ? project.description
                                            : 'No description provided'}
                                    </p>
                                </div>
                                <div>
                                    <a
                                        href={project.html_url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="bg-rose-500 text-white p-2 rounded-md hover:bg-white border-2 border-rose-500 hover:text-rose-500 transition-all flex items-center justify-center gap-2"
                                    >
                                        <FontAwesomeIcon icon={faLink} />
                                    </a>
                                </div>
                            </div>
                        ))}

                        <button
                            className="bg-rose-700 text-white p-2 rounded-md hover:bg-white border-2 border-rose-700 hover:text-rose-700 transition-all flex items-center justify-center mt-2 gap-2"
                            onClick={() => setTransitionTo('home')}
                        >
                            <FontAwesomeIcon icon={faChevronCircleLeft} />
                            Return to the landing page
                        </button>
                    </section>
                </main>
            </motion.div>

            <Particles
                id="tsparticles"
                className="absolute top-0 left-0 w-full h-full z-0"
                url="/particleConfig.json"
                init={particlesInit}
                loaded={particlesLoaded}
            />
        </div>
    );
};

export default ProjectsPage;
