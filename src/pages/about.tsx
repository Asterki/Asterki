import * as React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation('about');

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
                            {t('title')}
                        </h1>

                        <p className="mb-4">{t('introduction_text')}</p>

                        <h3 className="text-xl font-semibold mt-6 mb-2 flex items-center justify-center gap-2 md:flex-row flex-col">
                            <FontAwesomeIcon icon={faLightbulb} />
                            {t('empowering_title')}
                        </h3>
                        <p className="mb-4">{t('empowering_text')}</p>

                        <h3 className="text-xl font-semibold mt-6 mb-2 flex items-center justify-center gap-2 md:flex-row flex-col">
                            <FontAwesomeIcon icon={faBookmark} />
                            {t('founder_title')}
                        </h3>
                        <p className="mb-4">
                            {t('founder_text1')} <em>{t('founder_text2')}</em>{' '}
                            {t('founder_text3')} <br />
                            <strong>{t('founder_text4')}</strong>
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-2 flex items-center justify-center gap-2 md:flex-row flex-col">
                            <FontAwesomeIcon icon={faLink} />
                            {t('events_title')}
                        </h3>
                        <p className="mb-4">
                            {t('events_text1')}{' '}
                            <strong>{t('events_text2')}</strong>
                            {t('events_text3')}
                            <em>{t('events_text4')}</em>
                            {t('events_text5')}
                        </p>

                        <p className="mb-4">{t('events_text6')}</p>

                        <h3 className="text-xl font-semibold mt-6 mb-2 flex items-center justify-center gap-2 md:flex-row flex-col">
                            <FontAwesomeIcon icon={faBook} />
                            {t('philosophy_title')}
                        </h3>
                        <p className="mb-4">
                            {t('philosophy_text1')}{' '}
                            <em>{t('philosophy_text2')}</em>{' '}
                            {t('philosophy_text3')}
                        </p>

                        <p className="mb-4 font-semibold">{t('quote')}</p>

                        <h3 className="text-xl font-semibold mt-6 mb-2 flex items-center justify-center gap-2 md:flex-row flex-col">
                            <FontAwesomeIcon icon={faTrophy} />
                            {t('future_goals_title')}
                        </h3>
                        <p className="mb-4">
                            {t('future_goals_text1')}{' '}
                            <strong>{t('future_goals_text2')}</strong>{' '}
                            {t('future_goals_text3')}
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-2 flex items-center justify-center gap-2 md:flex-row flex-col">
                            <FontAwesomeIcon icon={faHeart} />
                            {t('acknowledgments_title')}
                        </h3>
                        <p className="mb-4">{t('acknowledgments_text')}</p>

                        <button
                            className="bg-rose-700 text-white p-2 rounded-md hover:bg-white border-2 border-rose-700 hover:text-rose-700 transition-all flex justify-center items-center gap-2"
                            onClick={() => setTransitionTo('home')}
                        >
                            <FontAwesomeIcon icon={faChevronCircleLeft} />
                            {t('footer_button')}
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
