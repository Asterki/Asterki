import React from "react";
import { useNavigate } from "react-router-dom";

import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";

import { motion } from "framer-motion";
import Head from "react-helmet";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

import "../styles/about.scss";

const AboutPage = () => {
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
            className="about-page"
        >
            <Head>
                <title>Asterki Dev | About</title>
            </Head>

            <div>
                <Particles init={particlesInit} className="particles" url="/particleConfig.json" />
            </div>

            <Navbar />

            <main>
                <div className="content">
                    <h2>About Me</h2>
                    <br />
                    Hi there! My name is Fernando Rivera, and I am a fullstack web developer based in Honduras. With a passion for creating beautiful and
                    functional web applications, I specialize in developing custom solutions that meet the unique needs of my clients. I have several years of
                    experience in the field. <br /> <br />
                    I am well-versed in a range of programming languages and platforms, including HTML, CSS, JavaScript, React, Node.js, and many others. I am
                    also familiar with a range of database technologies, such as MySQL and MongoDB, which allow me to create powerful and efficient applications
                    that can handle large amounts of data. <br /> <br />
                    One of the things that sets me apart from other web developers is my focus on collaboration and communication. I believe that the best
                    results come from working closely with my clients to understand their goals and requirements, and I always strive to keep my clients
                    informed and involved throughout the development process. <br /> <br />
                    If you&apos;re looking for a talented and experienced web developer, I would love to hear from you. Please feel free to browse the rest of
                    my website{" "}
                    <a href="#" onClick={() => switchPage("/contact")}>
                        and get in touch
                    </a>{" "}
                    if you have any questions or would like to discuss your project in more detail. <br /> <br />
                </div>

                <br />

                <div className="content">
                    <h2>Certifications</h2>
                    <ul>
                        <li>
                            FullStack Web Development BootCamp (App Brewery)
                        </li>
                        <li>
                            Backend Development and APIs (FreeCodeCamp)
                        </li>
                        <li>
                            Responsive Web Design (FreeCodeCamp)
                        </li>
                        <li>
                            JavaScript Algorithms and Data Structures (FreeCodeCamp)
                        </li>
                        <li>
                            Introduction To Data Science (Cisco Networking Academy)
                        </li>
                    </ul>
                </div>

                <br />

                <button onClick={() => switchPage("/")}>Go back</button>
            </main>

            <Footer />
        </motion.div>
    );
};

export default AboutPage;
