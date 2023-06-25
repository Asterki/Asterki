import React from "react";
import ReactDOM from "react-dom/client";

import Head from "react-helmet";

import "./styles/globals.scss";

import { RouterProvider } from "react-router-dom";
import router from "./router";

const App: React.FC = () => {
    React.useEffect(() => {
        console.log("watermelon");
    }, []);

    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=1" />
                <meta name="theme-color" content="#5294e2" />

                {/* <!-- Primary Meta Tags --> */}
                <title>Asterki Dev</title>
                <meta name="title" content="Asterki Dev" />
                <meta name="description" content="Asterki Dev: A Full Stack Web Developer, Learn More About Asterki In His Portfolio" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.asterki.com/" />
                <meta property="og:title" content="Asterki Dev" />
                <meta property="og:description" content="Asterki Dev: A Full Stack Web Developer, Learn More About Asterki In His Portfolio" />
                <meta property="og:image" content="/assets/images/icon.png" />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.asterki.com/" />
                <meta property="twitter:title" content="Asterki Dev" />
                <meta property="twitter:description" content="Asterki Dev: A Full Stack Web Developer, Learn More About Asterki In His Portfolio" />
                <meta property="twitter:image" content="/assets/images/icon.png" />
            </Head>

            <RouterProvider router={router} />
        </div>
    );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
