import * as React from 'react';
import { motion } from 'framer-motion';

const LandingPage = () => {
    const [isReady, setIsReady] = React.useState(false);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="w-full absolute top-0 left-0 z-50">
                <motion.div
                    className="bg-orange-500 min-h-screen w-full top-0 left-0 absolute shadow-md"
                    variants={{
                        initial: {
                            minHeight: '100vh',
                        },
                        final: {
                            minHeight: '11vh',
                        },
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 1.3,
                        bounceDamping: 10,
                        bounceStiffness: 100,
                        ease: 'easeInOut',
                    }}
                    initial={isReady ? 'final' : 'initial'}
                    animate={isReady ? 'final' : 'initial'}
                ></motion.div>
                <motion.div
                    className="bg-cyan-500 min-h-screen w-full top-0 left-0 absolute shadow-md"
                    variants={{
                        initial: {
                            minHeight: '100vh',
                        },
                        final: {
                            minHeight: '10vh',
                        },
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 1.2,
                        bounceDamping: 10,
                        bounceStiffness: 100,
                        ease: 'easeInOut',
                    }}
                    initial={isReady ? 'final' : 'initial'}
                    animate={isReady ? 'final' : 'initial'}
                ></motion.div>
                <motion.div
                    className="bg-green-500 min-h-screen w-full top-0 left-0 absolute shadow-md"
                    variants={{
                        initial: {
                            minHeight: '100vh',
                        },
                        final: {
                            minHeight: '10vh',
                        },
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 1.1,
                        bounceDamping: 10,
                        bounceStiffness: 100,
                        ease: 'easeInOut',
                    }}
                    initial={isReady ? 'final' : 'initial'}
                    animate={isReady ? 'final' : 'initial'}
                ></motion.div>
                <motion.div
                    className="bg-rose-700 min-h-screen w-full top-0 left-0 absolute flex items-center justify-around p-4"
                    variants={{
                        initial: {
                            minHeight: '100vh',
                        },
                        final: {
                            minHeight: '10vh',
                        },
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 1,
                        bounceDamping: 10,
                        bounceStiffness: 100,
                        ease: 'easeInOut',
                    }}
                    initial={isReady ? 'final' : 'initial'}
                    animate={isReady ? 'final' : 'initial'}
                >
                    <motion.div className="flex-col flex items-center justify-center">
                        <div className="bg-white w-2/12 h-2/12 rounded-full flex items-center justify-center">
                            <img
                                src="/assets/images/icon.png"
                                alt="Icon"
                                className="w-2/12"
                            />
                            <h1 className="text-center text-lg font-bold bg-clip-text text-transparent bg-gradient-to-tr from-rose-700 to-orange-500">
                                Asterki Dev
                            </h1>
                        </div>

                        <motion.p
                            className="text-white text-center text-2xl mt-2 overflow-hidden"
                            variants={{
                                initial: {
                                    opacity: 1,
                                    height: '40px',
                                },
                                final: {
                                    opacity: 0,
                                    height: 0,
                                },
                            }}
                            transition={{
                                duration: 0.3,
                                delay: 0.7,
                                ease: 'easeInOut',
                                onTransitionEnd: { display: 'none' },
                            }}
                            initial={isReady ? 'final' : 'initial'}
                            animate={isReady ? 'final' : 'initial'}
                        >
                            Spark Curiosity
                        </motion.p>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className="flex items-center justify-center w-full flex-col opacity-0"
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.6 }}
            >
                <img
                    src="/assets/images/icon.png"
                    alt="Icon"
                    className="w-2/12"
                />
                <h1 className="text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-rose-700 to-orange-500">
                    Asterki Dev
                </h1>
            </motion.div>

            <button
                className="absolute top-0 left-0 bg-white text-black rounded-md z-50 p-4"
                onClick={() => setIsReady(!isReady)}
            >
                Trigger Animation
            </button>
        </div>
    );
};

export default LandingPage;
