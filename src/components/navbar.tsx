import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'

interface NavbarProps {
    isReady: boolean;
    transitionTo: string;
}

const NavbarComponent: React.FC<NavbarProps> = (props: NavbarProps) => {
	const { t } = useTranslation('navbar')

    return (
        <div className="w-full top-0 left-0 z-50 fixed">
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
                    delay: 0.8,
                    bounceDamping: 10,
                    bounceStiffness: 100,
                    ease: 'easeInOut',
                }}
                initial={props.isReady ? 'final' : 'initial'}
                animate={props.isReady ? 'final' : 'initial'}
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
                    delay: 0.7,
                    bounceDamping: 10,
                    bounceStiffness: 100,
                    ease: 'easeInOut',
                }}
                initial={props.isReady ? 'final' : 'initial'}
                animate={props.isReady ? 'final' : 'initial'}
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
                    delay: 0.6,
                    bounceDamping: 10,
                    bounceStiffness: 100,
                    ease: 'easeInOut',
                }}
                initial={props.isReady ? 'final' : 'initial'}
                animate={props.isReady ? 'final' : 'initial'}
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
                    out: {
                        minHeight: '100vh',
                    },
                }}
                transition={{
                    duration: 0.5,
                    delay: props.isReady && props.transitionTo !== '' ? 0 : 0.5,
                    bounceDamping: 10,
                    bounceStiffness: 100,
                    ease: 'easeInOut',
                }}
                initial={props.isReady ? 'final' : 'initial'}
                animate={
                    props.isReady && props.transitionTo == ''
                        ? 'final'
                        : 'initial'
                }
            >
                <motion.div className="flex-col flex items-center justify-center">
                    <div className="bg-white md:w-2/12 w-11/12 h-2/12 rounded-full flex items-center justify-center">
                        <img
                            src="/assets/images/icon.png"
                            alt="Icon"
                            className="md:w-2/12 w-1/12 rounded-full"
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
                        initial={props.isReady ? 'final' : 'initial'}
                        animate={props.isReady ? 'final' : 'initial'}
                    >
                        {t('motto')}
                    </motion.p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default NavbarComponent;
