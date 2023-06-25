/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/globals.scss";

import { store } from "./store";
import { Provider } from "react-redux";
import { setLanguage } from "./store/pageSlice";

import { RouterProvider } from "react-router-dom";
import router from "./router";

import LangPackEN from "../shared/locales/en";

const App: React.FC = () => {
    React.useEffect(() => {
        if ("language" in navigator) {
            const languages = {
                // de: require("../../shared/locales/de").default as LangPack,
                en: LangPackEN,
                // es: require("../../shared/locales/es").default as typeof LangPack,
                // fr: require("../../shared/locales/fr").default as LangPack,
                // pr: require("../../shared/locales/pr").default as LangPack,
            };

            const localeCode = navigator.language.slice(0, 2);

            if (localeCode == "en") setLanguage(languages[localeCode]);
            else setLanguage(languages["en"]);
        }
    }, []);

    return (
        <>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </>
    );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
