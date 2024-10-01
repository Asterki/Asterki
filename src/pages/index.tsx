import * as React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faInstagram,
    faLinkedin,
    faMedium,
} from '@fortawesome/free-brands-svg-icons';

import Particles from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

const LandingPage = () => {
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

    React.useEffect(() => {
        if (transitionTo !== '') {
            setTimeout(() => {
                navigate(`/${transitionTo}`);
            }, 1000);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [transitionTo]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="w-full absolute top-0 left-0 z-50">
                <motion.div
                    className="bg-orange-500 min-h-screen w-full top-0 left-0 absolute shadow-md"
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
                className="flex items-center justify-center w-full flex-col opacity-0 z-10"
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.6 }}
            >
                <main className="flex md:flex-row flex-col gap-4 items-center justify-around md:mt-0 mt-24">
                    <section className="flex items-center justify-center flex-col bg-white border-2 border-rose-500 p-6 rounded-md shadow-md w-11/12 md:w-1/2 text-center">
                        <img
                            src="/assets/images/icon.png"
                            alt="Icon"
                            className="w-6/12 md:w-2/12 rounded-full"
                        />
                        <h1 className="text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-rose-700 to-orange-500">
                            Fernando Rivera
                        </h1>
                        <p className="text-gray-700 font-bold">
                            Developer, Advocate, and Founder
                        </p>

                        <i className="mt-2 text-gray-700">
                            "Don't feel intimidated, find motivation and
                            discipline amongst your dreams"
                        </i>
                    </section>
                    <section className="flex items-center justify-center flex-col gap-4 md:w-5/12 w-11/12">
                        <button
                            className="bg-rose-500 text-white p-2 rounded-md w-full hover:bg-white border-2 border-rose-500 hover:text-rose-500 transition-all"
                            onClick={() => {
                                setTransitionTo('about');
                            }}
                        >
                            About Me
                        </button>

                        <button
                            className="bg-rose-500 text-white p-2 rounded-md w-full hover:bg-white border-2 border-rose-500 hover:text-rose-500 transition-all"
                            onClick={() => {
                                setTransitionTo('aboutasterki');
                            }}
                        >
                            About Asterki Dev
                        </button>

                        <button
                            className="bg-rose-500 text-white p-2 rounded-md w-full hover:bg-white border-2 border-rose-500 hover:text-rose-500 transition-all"
                            onClick={() => {
                                setTransitionTo('skills');
                            }}
                        >
                            My Skills
                        </button>

                        <button
                            className="bg-rose-500 text-white p-2 rounded-md w-full hover:bg-white border-2 border-rose-500 hover:text-rose-500 transition-all"
                            onClick={() => {
                                setTransitionTo('projects');
                            }}
                        >
                            Projects
                        </button>

                        <button
                            className="bg-rose-500 text-white p-2 rounded-md w-full hover:bg-white border-2 border-rose-500 hover:text-rose-500 transition-all"
                            onClick={() => {
                                setTransitionTo('contact');
                            }}
                        >
                            Contact
                        </button>

                        <button
                            className="bg-rose-500 text-white p-2 rounded-md w-full hover:bg-white border-2 border-rose-500 hover:text-rose-500 transition-all"
                            onClick={() => {
                                // For now, just redirect to the medium blog
                                window.open(
                                    'https://medium.com/@asterki.dev',
                                );
                            }}
                        >
                            Blog
                        </button>

                        <div className="flex gap-4">
                            <a
                                href="https://instagram.com/nicht.fer"
                                target="_blank"
                            >
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    className="text-4xl text-rose-500 cursor-pointer hover:text-rose-400 transition-all"
                                />
                            </a>
                            <a
                                href="https://github.com/Asterki"
                                target="_blank"
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="text-4xl text-rose-500 cursor-pointer hover:text-rose-400 transition-all"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/fernando-rivera-365b74270/"
                                target="_blank"
                            >
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className="text-4xl text-rose-500 cursor-pointer hover:text-rose-400 transition-all"
                                />
                            </a>
                            <a
                                href="https://medium.com/@asterki.dev"
                                target="_blank"
                            >
                                <FontAwesomeIcon
                                    icon={faMedium}
                                    className="text-4xl text-rose-500 cursor-pointer hover:text-rose-400 transition-all"
                                />
                            </a>
                        </div>
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

export default LandingPage;
