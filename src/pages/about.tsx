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
            className="min-h-screen flec flex-col items-center justify-center"
        >
            <Head>
                <title>{lang.pageTitle}</title>
            </Head>

            <div>
                <Particles init={particlesInit} className="particles" url="/particleConfig.json" />
            </div>

            <Navbar />

            <main className="mt-24 flex items-center justify-center flex-col">
                <div className="bg-white/10 md:w-1/2 w-11/12 rounded-md p-6 my-8">
                    <h2 className="text-2xl mb-2">{lang.about.title}</h2>
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

                <div className="bg-white/10 md:w-1/2 w-11/12 rounded-md p-6 my-8">
                    <h2 className="text-2xl mb-2">{lang.training.title}</h2>
                    <ul className="list-disc">
                        <li>HTML Developer (SoloLearn) - 11/20</li>
                        <li>CSS Developer (SoloLearn) - 11/20</li>
                        <li>FullStack Web Development BootCamp (App Brewery) - 01/23</li>
                        <li>Responsive Web Design (freeCodeCamp) - 01/23</li>
                        <li>Backend Development and APIs (freeCodeCamp) - 01/23</li>
                        <li>Introduction To Data Science (Cisco Skills For All) - 03/23</li>
                        <li>JavaScript Algorithms and Data Structures (freeCodeCamp) - 03/23</li>
                        <li>Machine Learning A-Z: AI Python & R (Ligecy Team) - 04/23</li>
                        <li>Python Essentials 1 (Cisco Skills For All) - 05/23</li>
                        <li>Python Essentials 2 (Cisco Skills For All) - 05/23</li>
                        <li>Frontend Development Libraries (freeCodeCamp) - 05/23</li>
                        <li>JavaScript Essentials 1 (Cisco Skills For All) - 06/23</li>
                        <li>Scientific Computing with Python (freeCodeCamp) - 08/23</li>
                        <li>Python Programming Masterclass (Udemy) - 08/23</li>
                        <li>Intermediate Decorators in Python (Udemy) - 11/23</li>
                        <li>2023 Python Bootcamp Masterclass (Udemy) - 11/23</li>
                        <li>Foundational C# with Microsoft (freeCodeCamp/Microsoft Learn) - 11/23</li>
                        <li>Microsoft Excel Fundamentals (Udemy) - 11/23</li>
                        <li>Microsoft Excel for Begginers (Udemy) - 11/23</li>
                        <li>Python 101 for Data Science (Cognitive Class) - 11/23</li>
                        <li>Software Architecture (Udemy) - 12/23</li>
                        <li>SQL and Relational Databases 101 (Cognitive Class) - 12/23</li>
                        <li>Excel VBA for Beginner to Advanced (Udemy) - 12/23</li>
                        <li>Malware Analysis (Udemy) - 12/23</li>
                        <li>Information Security Fundamentals (Udemy) - 12/23</li>
                        <li>Web Performance 101 (Udemy) - 12/23</li>
                        <li>User Experience Design Professional Certification (MTF Institute of Management, Technology and Finance) 12/23</li>
                        <li>Prompt Enginering Professional Certification (MTF Institute of Management, Technology and Finance) 12/23</li>
                        <li>Strategic Management (Udemy) - 01/24</li>
                    </ul>

                    <p className="mt-4">To get a copy of any certificate or my CV, please contact me.</p>
                </div>

                <br />

                <button className="p-4 bg-white/10 hover:bg-white/20 rounded-md min-w-64 my-8 transition-all" onClick={() => switchPage("/")}>{lang.back}</button>
            </main>

        </motion.div>
    );
};

export default AboutPage;
