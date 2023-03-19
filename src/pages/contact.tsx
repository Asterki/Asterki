import React from "react";
import { useNavigate } from "react-router-dom";

import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";

import { motion } from "framer-motion";
import Head from "react-helmet";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

import "../styles/contact.scss";

const ContactPage = () => {
    const navigate = useNavigate();

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
            className="contact-page"
        >
            <Head>
                <title>Asterki Dev | Home</title>
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

            <main>
                <div>
                    <h1>Talk To Me</h1>
                    <ul>
                        <li>
                            My Email: <a href="mailto:asterki.dev@proton.me">asterki.dev@proton.me</a>
                        </li>
                        <li>
                            My Instagram: <a href="https://instagram.com/asterki.dev">asterki.dev</a>
                        </li>
                        <li>
                            My Discord: Asterki#1765
                        </li>
                        <li>
                            My Twitter: <a href="https://twitter.com/AsterkiDev">AsterkiDev</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h1>Hire Me</h1>
                    <ul>
                        <li>
                            My Fiverr: <a href="https://www.fiverr.com/asterki">Asterki</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h1>See My Projects</h1>
                    <ul>
                        <li>
                            My GitHub: <a href="https://github.com/asterki">Asterki</a>
                        </li>
                        <li>
                            This site
                        </li>
                    </ul>
                </div>

                <button onClick={() => switchPage("/")}>Go Back</button>
            </main>

            <Footer />
        </motion.div>
    );
};

export default ContactPage;
