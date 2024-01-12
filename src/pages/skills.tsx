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

const SkillsPage = () => {
    const navigate = useNavigate();
    const lang = useSelector((state: RootState) => state.page.lang.skills);

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
            className="min-h-screen flex flex-col items-center justify-center"
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

            <main className="mt-24 flex items-center justify-center flex-col w-full">
                <h1 className="text-4xl">{lang.title}</h1>

                <h2 className="mt-4 text-2xl">{lang.languages}</h2>
                <div className="md:w-7/12 lg:w-9/12 w-11/12 flex items-center flex-wrap justify-center flex-1">
                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2"
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                            alt="typescript"
                            width="40"
                            height="40"
                        />

                        <p>TypeScript</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="java" width="40" height="40" />
                        <p>Java</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="python" width="40" height="40" />
                        <p>Python</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40" />
                        <p>SASS</p>
                    </div>
                </div>

                <div className="md:w-7/12 lg:w-9/12 w-11/12 flex items-center flex-wrap justify-center flex-1">
                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2"
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                            alt="html5"
                            width="40"
                            height="40"
                        />

                        <p>HTML 5</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2"
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                            alt="css3"
                            width="40"
                            height="40"
                        />

                        <p>CSS 3</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2"
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                            alt="javascript"
                            width="40"
                            height="40"
                        />
                        <p>JavaScript</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt="nodejs" width="40" height="40" />
                        <p>Node.js</p>
                    </div>
                </div>

                <h2 className="mt-4 text-2xl">{lang.libs}</h2>
                {/* ML Related */}
                <div className="md:w-7/12 lg:w-9/12 w-11/12 flex items-center flex-wrap justify-center flex-1">
                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" alt="numpy" width="40" height="40" />

                        <p>NumPy</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="pandas" width="40" height="40" />

                        <p>Pandas</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2"
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bgp4.com%2Fwp-content%2Fuploads%2F2019%2F08%2FScikit_learn_logo_small.svg_-840x452.png&f=1&nofb=1&ipt=b43727494d9d0443690c64e4a160b48bf71f4393173956899b3150ffcd763600&ipo=images"
                            alt="sckitlearn"
                            width="60"
                            height="40"
                        />

                        <p>SciKit Learn</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://www.chartjs.org/img/chartjs-logo.svg" alt="chart.js" width="40" height="40" />

                        <p>Chart.js</p>
                    </div>
                </div>

                {/* Front End Libs */}
                <div className="md:w-7/12 lg:w-9/12 w-11/12 flex items-center flex-wrap justify-center flex-1">
                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://vitejs.dev/logo-with-shadow.png" alt="vite.js" width="40" height="40" />

                        <p>Vite.js</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2"
                            src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg"
                            alt="webpack"
                            width="40"
                            height="40"
                        />

                        <p>Webpack</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2"
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                            alt="react"
                            width="40"
                            height="40"
                        />

                        <p>React.js</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="redux" width="40" height="40" />

                        <p>Redux.js</p>
                    </div>
                </div>

                <div className="md:w-7/12 lg:w-9/12 w-11/12 flex items-center flex-wrap justify-center flex-1">
                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="nextjs" width="40" height="40" />

                        <p>Next.js</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" alt="nuxt.js" width="40" height="40" />

                        <p>Nuxt.js</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://asset.jarombek.com/logos/cypress.png" alt="cypress" width="40" height="40" />

                        <p>Cypress</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="vuejs" width="40" height="40" />
                        <p>Vue.js</p>
                    </div>
                </div>

                <div className="md:w-7/12 lg:w-9/12 w-11/12 flex items-center flex-wrap justify-center flex-1">
                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://fontawesome.com/images/favicon/icon.svg" alt="fontawesome" width="40" height="40" />
                        <p>FontAwesome</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="tailwind" width="40" height="40" />
                        <p>TailwindCSS</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="mui" width="40" height="40" />
                        <p>MUI</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" alt="jquery" width="40" height="40" />
                        <p>JQuery</p>
                    </div>
                </div>

                <div className="md:w-7/12 lg:w-9/12 w-11/12 flex items-center flex-wrap justify-center flex-1">
                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="antdesign" width="40" height="40" />

                        <p>Ant Design</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://www.framer.com/images/favicons/iOS/180.png" alt="Framer Motion" width="40" height="40" />

                        <p>Framer Motion</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" alt="threejs" width="40" height="40" />
                        <p>Three.js</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="bootstrap" width="40" height="40" />

                        <p>Bootstrap</p>
                    </div>
                </div>

                <div className="md:w-7/12 lg:w-9/12 w-11/12 flex items-center flex-wrap justify-center flex-1">
                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <svg viewBox="0 0 128 128" width="40" height="40">
                            <path
                                d="M40.53 77.82V50.74H42V55a5.57 5.57 0 00.48-.6 7.28 7.28 0 016.64-4.12c3.35-.1 6.07 1.14 7.67 4.12a13.24 13.24 0 01.32 12.14c-1.49 3.34-5.17 5-9.11 4.39a7.37 7.37 0 01-5.88-3.88v10.77zM42 60.32c.13 1.32.18 2.26.33 3.18.58 3.62 2.72 5.77 6.08 6.16A6.91 6.91 0 0056 65.27a11.77 11.77 0 00-.26-9.68 6.77 6.77 0 00-7.13-3.94 6.59 6.59 0 00-5.89 4.87 33.4 33.4 0 00-.72 3.8zM88.41 64a7.92 7.92 0 01-7.74 7c-6.16.31-9.05-3.78-9.51-8.5a13.62 13.62 0 011.2-7.5 8.37 8.37 0 018.71-4.67 8 8 0 017.1 6.09 41.09 41.09 0 01.69 4.5H72.67c-.3 4.28 2 7.72 5.26 8.55 4.06 1 7.53-.76 8.79-4.62.28-.99.79-1.13 1.69-.85zm-15.74-4.45h14.47c-.09-4.56-2.93-7.86-6.78-7.91-4.36-.07-7.5 3.11-7.69 7.91zM91.39 64.1h1.42a5.69 5.69 0 003.34 4.9 8.73 8.73 0 007.58-.2 3.41 3.41 0 002-3.35 3.09 3.09 0 00-2.08-3.09c-1.56-.58-3.22-.9-4.81-1.41A35.25 35.25 0 0194 59.18c-2.56-1.25-2.72-6.12.18-7.66a10.21 10.21 0 019.76-.15 5.14 5.14 0 012.6 5.24h-1.22c0-.06-.11-.11-.11-.17-.15-3.89-3.41-5.09-6.91-4.75a9.17 9.17 0 00-3 .91 3 3 0 00-1.74 3 3 3 0 002 2.82c1.54.56 3.15.92 4.73 1.36 1.27.35 2.59.58 3.82 1a4.51 4.51 0 013.1 4.07 4.81 4.81 0 01-2.59 5c-3.34 1.89-8.84 1.39-11.29-1a6.67 6.67 0 01-1.94-4.75zM125.21 56.61h-1.33c0-.18-.07-.34-.09-.49a4.35 4.35 0 00-3.54-4.18 8.73 8.73 0 00-5.61.27 3.41 3.41 0 00-2.47 3.25 3.14 3.14 0 002.4 3.16c2 .62 4.05 1 6.08 1.56a17 17 0 011.94.59 5 5 0 01.27 9.31 11.13 11.13 0 01-9 .09 6.24 6.24 0 01-3.76-6.06h1.3a7.29 7.29 0 0011.1 4.64 3.57 3.57 0 001.92-3.34 3.09 3.09 0 00-2.11-3.07c-1.56-.58-3.22-.89-4.81-1.4a35.43 35.43 0 01-4.87-1.75c-2.5-1.23-2.7-6.06.15-7.6a10.07 10.07 0 019.92-.11 5.23 5.23 0 012.51 5.13zM38.1 70.51a2.29 2.29 0 01-2.84-1.08c-1.63-2.44-3.43-4.77-5.16-7.15l-.75-1c-2.06 2.76-4.12 5.41-6 8.16a2.2 2.2 0 01-2.7 1.06l7.73-10.37-7.19-9.37a2.39 2.39 0 012.85 1c1.67 2.44 3.52 4.77 5.36 7.24 1.85-2.45 3.68-4.79 5.39-7.21a2.15 2.15 0 012.68-1l-2.79 3.7c-1.25 1.65-2.48 3.31-3.78 4.92a1 1 0 000 1.49c2.39 3.17 4.76 6.35 7.2 9.61zM70.92 50.66v1.4a7.25 7.25 0 00-7.72 7.49v11h-1.43V50.74h1.4v4.06c1.73-2.96 4.4-4.06 7.75-4.14zM2.13 60c.21-1 .34-2.09.63-3.11 1.73-6.15 8.78-8.71 13.63-4.9 2.84 2.23 3.55 5.39 3.41 8.95h-16c-.26 6.36 4.33 10.2 10.2 8.24a6.09 6.09 0 003.87-4.31c.31-1 .81-1.17 1.76-.88a8.12 8.12 0 01-3.88 5.93 9.4 9.4 0 01-10.95-1.4 9.85 9.85 0 01-2.46-5.78c0-.34-.13-.68-.2-1q-.01-.89-.01-1.74zm1.69-.43h14.47c-.09-4.61-3-7.88-6.88-7.91-4.32-.06-7.41 3.14-7.6 7.89z"
                                fill="white"
                            ></path>
                        </svg>
                        <p>Express.js</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://raw.githubusercontent.com/github/explore/d236cc6153f7ab3e68694234be43003b74cfe151/topics/fastify/fastify.png" alt="fastify" width="40" height="40" />
                        <p>Fastify</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="flask" width="40" height="40" />
                        <p>Flask</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" alt="socket.io" width="40" height="40" />
                        <p>Socket.io</p>
                    </div>
                </div>

                <div className="md:w-7/12 lg:w-9/12 w-11/12 flex items-center flex-wrap justify-center flex-1">
                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="firebase" width="40" height="40" />
                        <p>Firebase</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react native" width="40" height="40" />
                        <p>React Native</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg" alt="electron" width="40" height="40" />
                        <p>Electron.js</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="Jest" width="40" height="40" />
                        <p>Jest</p>
                    </div>
                </div>

                {/* Databases */}
                <h2 className="mt-4 text-2xl">{lang.databases}</h2>
                <div className="md:w-7/12 lg:w-9/12 w-11/12 flex items-center flex-wrap justify-center flex-1">
                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" width="40" height="40" />

                        <p>MySQL</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2"
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg"
                            alt="redis"
                            width="40"
                            height="40"
                        />
                        <p>Redis</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="mongodb" width="40" height="40" />
                        <p>MongoDB</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" alt="sqlite" width="40" height="40" />
                        <p>SQLite</p>
                    </div>
                </div>

                <h2 className="mt-4 text-2xl">{lang.tools}</h2>
                <div className="md:w-7/12 lg:w-9/12 w-11/12 flex items-center flex-wrap justify-center flex-1">
                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                            alt="visual studio code"
                            width="40"
                            height="40"
                        />
                        <p>VSCode</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40" />
                        <p>Postman</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg" alt="gimp" width="40" height="40" />
                        <p>GIMP</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40" />
                        <p>Figma</p>
                    </div>
                </div>

                <div className="md:w-7/12 lg:w-9/12 w-11/12 flex items-center flex-wrap justify-center flex-1">
                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg"
                            alt="nginx"
                            width="40"
                            height="40"
                        />
                        <p>NGINX</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" alt="docker" width="40" height="40" />
                        <p>Docker</p>
                    </div>

                    <div className="bg-white/10 hover:bg-white/20 transition-all rounded-md flex items-center m-2 px-4 py-2 w-full sm:w-4/12 lg:w-2/12 xl:3/12 backdrop-blur-md">
                        <img className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" alt="ubuntu" width="40" height="40" />
                        <p>Ubuntu</p>
                    </div>
                </div>

                <br />
                <br />

                <button className="p-4 bg-white/10 hover:bg-white/20 rounded-md min-w-64 my-8 transition-all backdrop-blur-md" onClick={() => switchPage("/")}>{lang.back}</button>
            </main>
        </motion.div>
    );
};

export default SkillsPage;
