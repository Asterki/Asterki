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
import Footer from "../components/footer";

import "../styles/about.scss";

const AboutPage = () => {
    const navigate = useNavigate();
    const lang = useSelector((state: RootState) => state.page.lang.about);

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
            className="about-page"
        >
            <Head>
                <title>{lang.pageTitle}</title>
            </Head>

            <div>
                <Particles init={particlesInit} className="particles" url="/particleConfig.json" />
            </div>

            <Navbar />

            <main>
                <div className="content">
                    <h2>{lang.about.title}</h2>
                    <br />
                    {lang.about.verse1} <br /> <br />
                    {lang.about.verse2} <br /> <br />
                    {lang.about.verse3} <br /> <br />
                    {lang.about.verse4}{" "}
                    <a href="#contact" onClick={() => switchPage("/contact")}>
                        {lang.about.verse5}
                    </a>{" "}
                    {lang.about.verse6} <br /> <br />
                </div>

                <br />
                <br />

                <div className="content">
                    <h2>{lang.training.title}</h2>
                    <ul>
                        <li>FullStack Web Development BootCamp (App Brewery)</li>
                        <li>Machine Learning A-Z: AI Python & R (Ligecy Team)</li>
                        <li>Frontend Development Libraries (FreeCodeCamp)</li>
                        <li>Backend Development and APIs (FreeCodeCamp)</li>
                        <li>Responsive Web Design (FreeCodeCamp)</li>
                        <li>JavaScript Algorithms and Data Structures (FreeCodeCamp)</li>
                        <li>Introduction To Data Science (Cisco Skills For All)</li>
                        <li>Python Essentials 1 (Cisco Skills For All)</li>
                        <li>Python Essentials 2 (Cisco Skills For All)</li>
                    </ul>
                </div>

                <br />

                <button onClick={() => switchPage("/")}>{lang.back}</button>
            </main>

            <Footer />
        </motion.div>
    );
};

export default AboutPage;
