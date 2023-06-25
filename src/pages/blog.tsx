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

import "../styles/blog.scss";

const BlogPage = () => {
    const navigate = useNavigate();
    const lang = useSelector((state: RootState) => state.page.lang.blog);

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
            className="blog-page"
        >
            <Head>
                <title>{lang.pageTitle}</title>
            </Head>

            <div>
                <Particles init={particlesInit} className="particles" url="/particleConfig.json" />
            </div>

            <Navbar />

            <main>
                <h1>{lang.title}</h1>
                <button onClick={() => switchPage("/")}>{lang.back}</button>
            </main>

            <Footer />
        </motion.div>
    );
};

export default BlogPage;
