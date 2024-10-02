import * as React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

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
import NavbarComponent from '../components/navbar';

const AboutPage = () => {
    const navigate = useNavigate();
	const { t } = useTranslation('aboutAsterki')

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
                            {t("about_asterki_title")}
                        </h1>

                        <h3 className="text-xl font-semibold mt-6 mb-2 flex items-center justify-center gap-2 md:flex-row flex-col">
                            <FontAwesomeIcon icon={faRocket} />
                            {t("our_story_title")}
                        </h3>
                        <p className="mb-4">
                            {t("our_story_text")}
                        </p>

                        {/* Mission Section - Modified */}
                        <h3 className="text-xl font-semibold mt-6 mb-2 flex items-center justify-center gap-2 md:flex-row flex-col">
                            <FontAwesomeIcon icon={faBullseye} />
                            {t("our_mission_title")}
                        </h3>
                        <p className="mb-4">
                            {t("our_mission_text")}
                        </p>

                        {/* Goals Section */}
                        <h3 className="text-xl font-semibold mt-6 mb-2 flex items-center justify-center gap-2 md:flex-row flex-col">
                            <FontAwesomeIcon icon={faChartLine} />
                            {t("our_future_goals_title")}
                        </h3>
                        <p className="mb-4">
                            {t("our_future_goals_text")}
                        </p>

                        {/* Contact Section */}
                        <h3 className="text-xl font-semibold mt-6 mb-2 flex items-center justify-center gap-2 md:flex-row flex-col">
                            <FontAwesomeIcon icon={faEnvelope} />
                            {t("contact_title")}
                        </h3>
                        <p className="mb-4">
                            {t("contact_text")}
                        </p>
                        <button
                            onClick={() => setTransitionTo('contact')}
                            className="bg-rose-700 text-white p-2 mt-4 rounded-md hover:bg-white border-2 border-rose-700 hover:text-rose-700 transition-all flex justify-center items-center gap-2"
                        >
                            {t("contact_button")}
                        </button>

                        <button
                            className="bg-rose-700 text-white p-2 mt-4 rounded-md hover:bg-white border-2 border-rose-700 hover:text-rose-700 transition-all flex justify-center items-center gap-2"
                            onClick={() => setTransitionTo('home')}
                        >
                            <FontAwesomeIcon icon={faChevronCircleLeft} />
                            {t("footer_button")}
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
