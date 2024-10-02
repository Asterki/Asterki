import * as React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

import Particles from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

const SkillCard = ({
    imageSrc,
    label,
}: {
    imageSrc: string;
    label: string;
}) => (
    <div className="transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12">
        <img
            className="mr-2"
            src={imageSrc}
            alt={label}
            width="40"
            height="40"
        />
        <p>{label}</p>
    </div>
);

const SkillsPage = () => {
    const navigate = useNavigate();

    const [isReady, setIsReady] = React.useState(false);
    const [transitionTo, setTransitionTo] = React.useState('');

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
    }, []);

    const skills = {
        'Programming Languages': [
            {
                name: 'TypeScript',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
            },
            {
                name: 'Java',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
            },
            {
                name: 'Python',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
            },
            {
                name: 'JavaScript',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
            },
        ],
        'Frontend Frameworks and Libraries': [
            {
                name: 'React.js',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
            },
            {
                name: 'Next.js',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
            },
            {
                name: 'Redux.js',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
            },
            {
                name: 'Bootstrap',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg',
            },
            {
                name: 'TailwindCSS',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg',
            },
            {
                name: 'Ant Design',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/antdesign/antdesign-original.svg',
            },
            {
                name: 'FontAwesome',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
            },
            {
                name: 'SCSS',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
            },
            {
                name: 'WordPress',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-original.svg',
            },
            {
                name: 'MUI',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg',
            },
        ],

        'Backend Frameworks': [
            {
                name: 'Node.js',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
            },
            {
                name: 'Express.js',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
            },
            {
                name: 'Fastify',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/fastify/fastify-original.svg',
            },
            {
                name: 'Flask',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg',
            },
            {
                name: 'Firebase',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg',
            },
            {
                name: 'Socket.io',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/socketio/socketio-original.svg',
            },
            {
                name: 'Electron.js',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg',
            },
        ],
        'Data Science and Libraries': [
            {
                name: 'NumPy',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg',
            },
            {
                name: 'Pandas',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg',
            },
            {
                name: 'SciKit Learn',
                icon: 'https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png',
            },
        ],
        Databases: [
            {
                name: 'MySQL',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
            },
            {
                name: 'MongoDB',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
            },
            {
                name: 'Redis',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg',
            },
            {
                name: 'SQLite',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sqlite/sqlite-original.svg',
            },
            {
                name: 'PostgreSQL',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
            },
            {
                name: 'MariaDB',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mariadb/mariadb-original.svg',
            },
        ],
        'Tools and Software': [
            {
                name: 'VSCode',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg',
            },
            {
                name: 'Postman',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg',
            },
            {
                name: 'GIMP',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/gimp/gimp-original.svg',
            },
            {
                name: 'Figma',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg',
            },
            {
                name: 'NGINX',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg',
            },
            {
                name: 'Docker',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
            },
            {
                name: 'Kubernetes',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg',
            },
            {
                name: 'Linux',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg',
            },
            {
                name: 'Azure',
                icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg',
            },
        ],
    };

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
            <div className="w-full top-0 left-0 z-50 absolute">
                <motion.div
                    className="bg-orange-500 min-h-screen w-full top-0 left-0 sticky shadow-md"
                    variants={{
                        initial: {
                            minHeight: '100vh',
                        },
                        final: {
                            minHeight: '11vh',
                        },
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.8,
                        bounceDamping: 10,
                        bounceStiffness: 100,
                        ease: 'easeInOut',
                    }}
                    initial={isReady ? 'final' : 'initial'}
                    animate={isReady ? 'final' : 'initial'}
                ></motion.div>
                <motion.div
                    className="bg-cyan-500 min-h-screen w-full top-0 left-0 absolute shadow-md"
                    variants={{
                        initial: {
                            minHeight: '100vh',
                        },
                        final: {
                            minHeight: '10vh',
                        },
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.7,
                        bounceDamping: 10,
                        bounceStiffness: 100,
                        ease: 'easeInOut',
                    }}
                    initial={isReady ? 'final' : 'initial'}
                    animate={isReady ? 'final' : 'initial'}
                ></motion.div>
                <motion.div
                    className="bg-green-500 min-h-screen w-full top-0 left-0 absolute shadow-md"
                    variants={{
                        initial: {
                            minHeight: '100vh',
                        },
                        final: {
                            minHeight: '10vh',
                        },
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.6,
                        bounceDamping: 10,
                        bounceStiffness: 100,
                        ease: 'easeInOut',
                    }}
                    initial={isReady ? 'final' : 'initial'}
                    animate={isReady ? 'final' : 'initial'}
                ></motion.div>
                <motion.div
                    className="bg-rose-700 min-h-screen w-full top-0 left-0 absolute flex items-center justify-around p-4"
                    variants={{
                        initial: {
                            minHeight: '100vh',
                        },
                        final: {
                            minHeight: '10vh',
                        },
                        out: {
                            minHeight: '100vh',
                        },
                    }}
                    transition={{
                        duration: 0.5,
                        delay: isReady && transitionTo !== '' ? 0 : 0.5,
                        bounceDamping: 10,
                        bounceStiffness: 100,
                        ease: 'easeInOut',
                    }}
                    initial={isReady ? 'final' : 'initial'}
                    animate={
                        isReady && transitionTo == '' ? 'final' : 'initial'
                    }
                >
                    <motion.div className="flex-col flex items-center justify-center">
                        <div className="bg-white md:w-2/12 w-11/12 h-2/12 rounded-full flex items-center justify-center">
                            <img
                                src="/assets/images/icon.png"
                                alt="Icon"
                                className="md:w-2/12 w-1/12 rounded-full"
                            />
                            <h1 className="text-center text-lg font-bold bg-clip-text text-transparent bg-gradient-to-tr from-rose-700 to-orange-500">
                                Asterki Dev
                            </h1>
                        </div>

                        <motion.p
                            className="text-white text-center text-2xl mt-2 overflow-hidden"
                            variants={{
                                initial: {
                                    opacity: 1,
                                    height: '40px',
                                },
                                final: {
                                    opacity: 0,
                                    height: 0,
                                },
                            }}
                            transition={{
                                duration: 0.3,
                                delay: 0.7,
                                ease: 'easeInOut',
                                onTransitionEnd: { display: 'none' },
                            }}
                            initial={isReady ? 'final' : 'initial'}
                            animate={isReady ? 'final' : 'initial'}
                        >
                            Spark Curiosity
                        </motion.p>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className="flex items-center justify-center w-full flex-col opacity-0 z-10 mt-32"
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.6 }}
            >
                <main className="flex md:flex-row flex-col gap-4 items-center justify-around md:mt-0 mt-24 mb-24 w-full">
                    <section className="text-gray-700 flex items-center justify-center flex-col bg-white border-2 border-rose-500 p-6 rounded-md shadow-md w-11/12 md:w-9/12 text-center">
                        <h1 className="text-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-rose-700 to-orange-500 w-full">
                            My Skills
                        </h1>

                        {Object.entries(skills).map(([category, skills]) => (
                            <div
                                key={category}
                                className="md:w-7/12 lg:w-9/12 w-11/12 flex items-center flex-wrap justify-center flex-1"
                            >
                                <h2 className="text-2xl w-full mt-6">
                                    {category}
                                </h2>
                                {skills.map((skill) => (
                                    <SkillCard
                                        key={skill.name}
                                        imageSrc={skill.icon}
                                        label={skill.name}
                                    />
                                ))}
                            </div>
                        ))}

                        <button
                            className="bg-rose-700 text-white p-2 rounded-md hover:bg-white border-2 border-rose-700 hover:text-rose-700 transition-all flex justify-center items-center gap-2"
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

export default SkillsPage;
