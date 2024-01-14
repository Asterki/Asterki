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

const IndexPage = () => {
    const navigate = useNavigate();
    const lang = useSelector((state: RootState) => state.page.lang.index);

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
            className="h-screen min-h-screen flex flex-col items-center justify-center"
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
                <Particles init={particlesInit} className="absolute top-0 z-0 flex items-center justify-center" url="/particleConfig.json" />
            </motion.div>

            <Navbar />

            <main className="mt-24 min-h-screen w-11/12 md:w-1/2 flex items-center justify-center flex-col">
                <motion.img
                    variants={{ shown: { filter: "drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.7))" }, hidden: { boxShadow: "none" } }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    initial="hidden"
                    animate="shown"
                    src="/assets/images/icon.png"
                    alt="Icon"
                    className="max-w-[250px] rounded-full"
                />
                <h1 className="text-3xl mt-2 text-center">Asterki</h1>
                <p className="mb-2 text-center">{lang.introduction}</p>

                <motion.button
                    variants={{ shown: { y: 0, opacity: 1 }, hidden: { y: 100, opacity: 0 } }}
                    transition={{ duration: 0.1, delay: 0.1 }}
                    onClick={() => switchPage("/about")}
                    initial="hidden"
                    animate="shown"
                    className="w-8/12 cursor-pointer rounded-md m-2 p-2 text-xl transition-all hover:bg-white/20 bg-white/10 backdrop-blur-md"
                >
                    {lang.about}
                </motion.button>

                <motion.button
                    variants={{ shown: { y: 0, opacity: 1 }, hidden: { y: 100, opacity: 0 } }}
                    transition={{ duration: 0.1, delay: 0.2 }}
                    onClick={() => switchPage("/skills")}
                    initial="hidden"
                    animate="shown"
                    className="w-8/12 cursor-pointer rounded-md m-2 p-2 text-xl transition-all hover:bg-white/20 bg-white/10 backdrop-blur-md"
                >
                    {lang.skills}
                </motion.button>

                <motion.button
                    variants={{ shown: { y: 0, opacity: 1 }, hidden: { y: 100, opacity: 0 } }}
                    transition={{ duration: 0.1, delay: 0.3 }}
                    onClick={() => switchPage("/projects")}
                    initial="hidden"
                    animate="shown"
                    className="w-8/12 cursor-pointer rounded-md m-2 p-2 text-xl transition-all hover:bg-white/20 bg-white/10 backdrop-blur-md"
                >
                    {lang.projects}
                </motion.button>

                <motion.button
                    variants={{ shown: { y: 0, opacity: 1 }, hidden: { y: 100, opacity: 0 } }}
                    transition={{ duration: 0.1, delay: 0.4 }}
                    onClick={() => switchPage("/contact")}
                    initial="hidden"
                    animate="shown"
                    className="w-8/12 cursor-pointer rounded-md m-2 p-2 text-xl transition-all hover:bg-white/20 bg-white/10 backdrop-blur-md"
                >
                    {lang.contact}
                </motion.button>

                <motion.button
                    variants={{ shown: { y: 0, opacity: 1 }, hidden: { y: 100, opacity: 0 } }}
                    transition={{ duration: 0.1, delay: 0.5 }}
                    onClick={() => {
                        window.open("https://medium.com/@asterki.dev", "_blank");
                    }}
                    initial="hidden"
                    animate="shown"
                    className="w-8/12 cursor-pointer rounded-md m-2 p-2 text-xl transition-all hover:bg-white/20 bg-white/10 backdrop-blur-md"
                >
                    {lang.blog}
                </motion.button>
            </main>
        </motion.div>
    );
};

export default IndexPage;
