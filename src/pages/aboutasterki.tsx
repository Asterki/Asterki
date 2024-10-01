import * as React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRocket,
    faChevronCircleLeft,
    faBullseye,
    faChartLine,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import Particles from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

const AboutPage = () => {
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
            <div className="w-full top-0 left-0 z-50 sticky">
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
                className="flex items-center justify-center w-full flex-col opacity-0 z-10 mt-32"
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.6 }}
            >
                <main className="flex md:flex-row flex-col gap-4 items-center justify-around md:mt-0 mt-24 mb-24 w-full">
                    <section className="text-gray-700 flex items-center justify-center flex-col bg-white border-2 border-rose-500 p-6 rounded-md shadow-md w-11/12 md:w-9/12 text-center">
                        <h1 className="text-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-rose-700 to-orange-500 w-full">
                            About Asterki Dev
                        </h1>

                        <h3 className="text-xl font-semibold mt-6 mb-2 flex items-center justify-center gap-2 md:flex-row flex-col">
                            <FontAwesomeIcon icon={faRocket} />
                            Our Story
                        </h3>
                        <p className="mb-4">
                            Asterki Dev started as a personal project and has
                            since grown into a platform dedicated to making tech
                            education accessible. With a focus on sparking
                            curiosity, we aim to inspire individuals to explore
                            the world of technology, no matter their background
                            or resources. From workshops to learning resources,
                            we are committed to building a community where
                            aspiring developers can learn, experiment, and grow.
                        </p>

                        {/* Mission Section - Modified */}
                        <h3 className="text-xl font-semibold mt-6 mb-2 flex items-center justify-center gap-2 md:flex-row flex-col">
                            <FontAwesomeIcon icon={faBullseye} />
                            Our Mission: Empowering Through Tech and Providing
                            Solutions
                        </h3>
                        <p className="mb-4">
                            At Asterki Dev, our mission is twofold: to empower
                            individuals through accessible tech education and to
                            offer innovative software solutions that address
                            diverse challenges. We strive to create an inclusive
                            environment where learners can unlock their
                            potential while providing practical tools and
                            applications to solve real-world problems. By
                            bridging the gap between education and software
                            development, we ensure that our users are equipped
                            to navigate the tech landscape with confidence.
                        </p>

                        {/* Goals Section */}
                        <h3 className="text-xl font-semibold mt-6 mb-2 flex items-center justify-center gap-2 md:flex-row flex-col">
                            <FontAwesomeIcon icon={faChartLine} />
                            Our Future Goals
                        </h3>
                        <p className="mb-4">
                            Looking ahead, we aspire to expand Asterki Dev’s
                            reach by partnering with educational institutions
                            and tech organizations worldwide. Our goal is to
                            build a comprehensive platform that offers
                            mentorship, hands-on projects, and cutting-edge
                            courses that keep learners ahead in the rapidly
                            evolving tech industry.
                        </p>

                        {/* Contact Section */}
                        <h3 className="text-xl font-semibold mt-6 mb-2 flex items-center justify-center gap-2 md:flex-row flex-col">
                            <FontAwesomeIcon icon={faEnvelope} />
                            Get in Touch
                        </h3>
                        <p className="mb-4">
                            Interested in collaborating or learning more about
                            Asterki Dev? Feel free to reach out. We’d love to
                            hear from you!
                        </p>
                        <button
                            onClick={() => setTransitionTo('contact')}
                            className="bg-rose-700 text-white p-2 mt-4 rounded-md hover:bg-white border-2 border-rose-700 hover:text-rose-700 transition-all flex justify-center items-center gap-2"
                        >
                            Contact Us
                        </button>

                        <button
                            className="bg-rose-700 text-white p-2 mt-4 rounded-md hover:bg-white border-2 border-rose-700 hover:text-rose-700 transition-all flex justify-center items-center gap-2"
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

export default AboutPage;
