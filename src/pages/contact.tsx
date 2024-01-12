import React from "react";
import { useNavigate } from "react-router-dom";

import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";

import { useSelector } from "react-redux";
import { RootState } from "../store";

import { motion } from "framer-motion";
import Head from "react-helmet";
import Navbar from "../components/navbar";

const ContactPage = () => {
    const navigate = useNavigate();
    const lang = useSelector((state: RootState) => state.page.lang.contact);

    const [isTransitioning, setIsTransitioning] = React.useState(false);

    const particlesInit = React.useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const switchPage = (page: string) => {
        setIsTransitioning(true);

        setTimeout(() => {
            navigate(page);
        }, 300);
    };

    return (
        <motion.div
            variants={{ shown: { opacity: 1 }, hidden: { opacity: 0 } }}
            transition={{ duration: 0.3 }}
            initial="hidden"
            animate={isTransitioning == false ? "shown" : "hidden"}
            className="min-h-screen flec flex-col items-center justify-center"
        >
            <Head>
                <title>{lang.pageTitle}</title>
            </Head>

            <motion.div
                variants={{ shown: { opacity: 1 }, hidden: { opacity: 0 } }}
                transition={{ duration: 0.3, delay: 0.7 }}
                initial="hidden"
                animate="shown"
                // hidden
            >
                <Particles init={particlesInit} className="particles" url="/particleConfig.json" />
            </motion.div>

            <Navbar />

            <main className="mt-24 flex items-center justify-center flex-col">
                <div className="bg-white/10 backdrop-blur-md md:w-1/2 w-11/12 rounded-md p-6 my-8">
                    <h1 className="text-2xl">{lang.talkToMe.title}</h1>
                    <ul>
                        <li>
                            {lang.talkToMe.email} <a href="mailto:asterki.dev@proton.me">asterki.dev@proton.me</a>
                        </li>
                        <li>
                            {lang.talkToMe.instagram} <a href="https://instagram.com/nicht.fer">nicht.fer</a>
                        </li>
                        <li>{lang.talkToMe.discord} @asterki</li>
                        <li>
                            {lang.talkToMe.twitter} <a href="https://twitter.com/AsterkiDev">AsterkiDev</a>
                        </li>
                    </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-md md:w-1/2 w-11/12 rounded-md p-6 my-8">
                    <h1 className="text-2xl">{lang.hireMe.title}</h1>
                    <ul>
                        <li>
                            {lang.hireMe.fiverr} <a href="https://www.fiverr.com/asterki">Asterki</a>
                        </li>
                    </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-md md:w-1/2 w-11/12 rounded-md p-6 my-8">
                    <h1 className="text-2xl">{lang.seeMyProjects.title}</h1>
                    <ul>
                        <li>
                            {lang.seeMyProjects.github} <a href="https://github.com/asterki">Asterki</a>
                        </li>
                        <li>{lang.seeMyProjects.thisSite}</li>
                    </ul>
                </div>

                <button className="p-4 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-md min-w-64 my-8 transition-all" onClick={() => switchPage("/")}>{lang.back}</button>
            </main>
        </motion.div>
    );
};

export default ContactPage;
