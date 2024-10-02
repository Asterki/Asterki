import * as React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBookmark,
    faHeart,
    faLightbulb,
} from '@fortawesome/free-regular-svg-icons';
import {
    faBook,
    faChevronCircleLeft,
    faLink,
    faTrophy,
} from '@fortawesome/free-solid-svg-icons';

import Particles from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import NavbarComponent from '../components/navbar';

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
            <NavbarComponent isReady={isReady} transitionTo={transitionTo} />

            <motion.div
                className="flex items-center justify-center w-full flex-col opacity-0 z-10 mt-32"
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.6 }}
            >
                <main className="flex md:flex-row flex-col gap-4 items-center justify-around md:mt-0 mt-24 mb-24 w-full">
                    <section className="text-gray-700 flex items-center justify-center flex-col bg-white border-2 border-rose-500 p-6 rounded-md shadow-md w-11/12 md:w-9/12 text-center">
                        <h1 className="text-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-rose-700 to-orange-500 w-full">
                            About Me
                        </h1>

                        <p className="mb-4">
                            I am Fernando Rivera, born in 2007 in Comayagua,
                            Honduras. From a young age, I found myself
                            captivated by the world of software and technology.
                            My journey began unexpectedly one day when I
                            stumbled upon a batch script file filled with lines
                            of code I couldn’t comprehend. Rather than leaving
                            it unexplored, this mystery ignited a curiosity that
                            has fueled my path ever since. Over time, I honed my
                            skills and discovered a passion for creating
                            impactful projects that bridge technology and
                            learning.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-2 flex items-center justify-center gap-2 md:flex-row flex-col">
                            <FontAwesomeIcon icon={faLightbulb} />
                            Empowering Peers and Providing Solutions
                        </h3>
                        <p className="mb-4">
                            At present, I am dedicated to fostering a deeper
                            understanding of technology as a developer. I not
                            only focus on empowering my peers through accessible
                            tech education but also provide software solutions
                            tailored to meet various needs. Alongside my
                            development work, I offer comprehensive support to
                            users, ensuring they have the resources and guidance
                            necessary to effectively utilize the software I
                            create. By organizing workshops and events, I aim to
                            demystify complex concepts and provide hands-on
                            experiences that ignite curiosity and inspire others
                            to explore the world of technology. This mission is
                            driven by my belief that everyone should have the
                            opportunity to learn and grow in the tech field,
                            regardless of their background or resources.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-2 flex items-center justify-center gap-2 md:flex-row flex-col">
                            <FontAwesomeIcon icon={faBookmark} />
                            The Founder of Asterki Dev
                        </h3>
                        <p className="mb-4">
                            Asterki Dev started as my online persona. As I
                            engaged more deeply with the tech community, I
                            realized I wanted to create something bigger — a
                            platform that goes beyond skilling people. I
                            envisioned a space that could{' '}
                            <em>spark curiosity</em> in those who have the
                            interest but might lack the means to pursue a tech
                            career. That’s how Asterki Dev was born, with a
                            simple motto: <br />
                            <strong>“Spark Curiosity.”</strong>
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-2 flex items-center justify-center gap-2 md:flex-row flex-col">
                            <FontAwesomeIcon icon={faLink} />
                            Events and Community Contributions
                        </h3>
                        <p className="mb-4">
                            As a{' '}
                            <strong>student representative and advocate</strong>
                            , I’ve organized events like{' '}
                            <em>MSLA Comayagua 2024</em>, held at the Marist
                            Institute La Inmaculada in my hometown. This event
                            skilled over 70 students locally and 250 worldwide
                            in the fields of software development and
                            technology.
                        </p>

                        <p className="mb-4">
                            One of my proudest moments was the recognition of
                            Octo-tree by the National University of Honduras
                            (UNAH) as an exceptional project. It’s these
                            milestones that continue to drive my passion for
                            sharing knowledge and building a community around
                            technology.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-2 flex items-center justify-center gap-2 md:flex-row flex-col">
                            <FontAwesomeIcon icon={faBook} />
                            My Philosophy
                        </h3>
                        <p className="mb-4">
                            Open-source principles and community-driven learning
                            are at the heart of everything I do. I believe in
                            the power of motivation and discipline as the keys
                            to success. My goal is to create tools, projects,
                            and platforms that inspire others to discover their
                            own <em>box of curiosity</em> — just as I did that
                            day when I first opened a mysterious script file.
                        </p>

                        <p className="mb-4 font-semibold">
                            “Don’t feel intimidated, find motivation and
                            discipline amongst your dreams.”
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-2 flex items-center justify-center gap-2 md:flex-row flex-col">
                            <FontAwesomeIcon icon={faTrophy} />
                            Future Goals
                        </h3>
                        <p className="mb-4">
                            In the future, I envision expanding the reach of{' '}
                            <strong>Asterki Dev</strong> as I work toward
                            becoming a proficient developer and establishing
                            myself as a professional in the tech industry. My
                            focus will be on honing my skills and knowledge in
                            emerging technologies while continually pushing my
                            boundaries. I aim to take on challenging projects
                            that enhance my expertise, enabling me to contribute
                            effectively to the tech landscape. This journey of
                            personal growth will empower me to create meaningful
                            solutions and innovations that reflect my commitment
                            to excellence.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-2 flex items-center justify-center gap-2 md:flex-row flex-col">
                            <FontAwesomeIcon icon={faHeart} />
                            Acknowledgments
                        </h3>
                        <p className="mb-4">
                            I would like to take a moment to thank Kat for being
                            always there for me, for supporting and motivating
                            me throughout my journey. Your encouragement has
                            been super important in keeping me on track with my
                            goals and aspirations. I truly appreciate your
                            belief in me and the invaluable guidance you’ve
                            provided me. Thank you for being an amazing friend.
                        </p>

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

export default AboutPage;
