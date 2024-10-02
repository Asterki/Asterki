import * as React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faChevronCircleLeft,
} from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';

import Particles from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import NavbarComponent from '../components/navbar';

const ContactPage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation('contact');

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
                            {t('contact_me_title')}
                        </h1>

                        <ul className="my-4">
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} />{' '}
                                {t('email_section_label')}{' '}
                                <a
                                    href="mailto:asterki.dev@proton.me"
                                    className="text-rose-500"
                                >
                                    asterki.dev@proton.me
                                </a>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faInstagram} />{' '}
                                {t('instagram_section_label')}{' '}
                                <a
                                    href="https://instagram.com/nicht.fer"
                                    className="text-rose-500"
                                >
                                    nicht.fer
                                </a>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faDiscord} />{' '}
                                {t('discord_section_label')}: @asterki
                            </li>
                        </ul>

                        <button
                            className="bg-rose-700 text-white p-2 rounded-md hover:bg-white border-2 border-rose-700 hover:text-rose-700 transition-all flex justify-center items-center gap-2"
                            onClick={() => setTransitionTo('home')}
                        >
                            <FontAwesomeIcon icon={faChevronCircleLeft} />
                            {t('return_button')}
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

export default ContactPage;
