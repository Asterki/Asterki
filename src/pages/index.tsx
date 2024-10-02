import * as React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faInstagram,
    faLinkedin,
    faMedium,
} from '@fortawesome/free-brands-svg-icons';

import NavbarComponent from '../components/navbar';
import Particles from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

const LandingPage = () => {
	const { t } = useTranslation('landing')
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
        <div className="min-h-screen flex flex-col items-center justify-center relative">
            <NavbarComponent isReady={isReady} transitionTo={transitionTo} />

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
                            {t('subtitle')}
                        </p>

                        <i className="mt-2 text-gray-700">
                            {t('quote')}
                        </i>
                    </section>
                    <section className="flex items-center justify-center flex-col gap-4 md:w-5/12 w-11/12">
                        <button
                            className="bg-rose-500 text-white p-2 rounded-md w-full hover:bg-white border-2 border-rose-500 hover:text-rose-500 transition-all"
                            onClick={() => {
                                setTransitionTo('about');
                            }}
                        >
                            {t('buttons.about')}
                        </button>

                        <button
                            className="bg-rose-500 text-white p-2 rounded-md w-full hover:bg-white border-2 border-rose-500 hover:text-rose-500 transition-all"
                            onClick={() => {
                                setTransitionTo('aboutasterki');
                            }}
                        >
                            {t('buttons.aboutasterki')}
                        </button>

                        <button
                            className="bg-rose-500 text-white p-2 rounded-md w-full hover:bg-white border-2 border-rose-500 hover:text-rose-500 transition-all"
                            onClick={() => {
                                setTransitionTo('skills');
                            }}
                        >
                            {t('buttons.skills')}
                        </button>

                        <button
                            className="bg-rose-500 text-white p-2 rounded-md w-full hover:bg-white border-2 border-rose-500 hover:text-rose-500 transition-all"
                            onClick={() => {
                                setTransitionTo('projects');
                            }}
                        >
                            {t('buttons.projects')}
                        </button>

                        <button
                            className="bg-rose-500 text-white p-2 rounded-md w-full hover:bg-white border-2 border-rose-500 hover:text-rose-500 transition-all"
                            onClick={() => {
                                setTransitionTo('contact');
                            }}
                        >
                            {t('buttons.contact')}
                        </button>

                        <button
                            className="bg-rose-500 text-white p-2 rounded-md w-full hover:bg-white border-2 border-rose-500 hover:text-rose-500 transition-all"
                            onClick={() => {
                                // For now, just redirect to the medium blog
                                window.open('https://medium.com/@asterki.dev');
                            }}
                        >
                            {t('buttons.blog')}
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
