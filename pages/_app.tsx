import "semantic-ui-css/semantic.min.css";
import "../styles/globals.scss";

import { Analytics } from '@vercel/analytics/react'
import Head from "next/head";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=1" />
                <meta name="theme-color" content="#9229bf" />

                {/* <!-- Primary Meta Tags --> */}
                <meta name="title" content="Asterki Dev" />
                <meta name="description" content="Self Taught Full Stack Web Developer" />

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.asterki.ga/" />
                <meta property="og:title" content="Asterki" />
                <meta property="og:description" content="Self Taught Full Stack Web Developer" />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://asterki.ga/" />
                <meta property="twitter:title" content="Asterki" />
                <meta property="twitter:description" content="Self Taught Full Stack Web Developer" />
            </Head>
            <Component {...pageProps} />;
	    <Analytics />
        </>
    );
};

export default App;
