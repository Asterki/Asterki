/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";

import { store } from "./store";
import { Provider } from "react-redux";
import { setLanguage } from "./store/pageSlice";

import { RouterProvider } from "react-router-dom";
import router from "./router";

import LangPackEN from "../shared/locales/en";
import LangPackES from "../shared/locales/es";
import LangPackDE from "../shared/locales/de";
import LangPackFR from "../shared/locales/fr";
import LangPackPR from "../shared/locales/pr";
import LangPackIT from "../shared/locales/it";
import LangPackRU from "../shared/locales/ru";
import LangPackKO from "../shared/locales/ko";

const App: React.FC = () => {
    React.useEffect(() => {
        if ("language" in navigator) {
            const languages = {
                en: LangPackEN,
                es: LangPackES,
                de: LangPackDE,
                fr: LangPackFR,
                pr: LangPackPR,
                it: LangPackIT,
                ru: LangPackRU,
                ko: LangPackKO,
            };

            const localeCode = navigator.language.slice(0, 2) ? navigator.language.slice(0, 2) : "en";
            if (
                localeCode == "en" ||
                localeCode == "es" ||
                localeCode == "de" ||
                localeCode == "fr" ||
                localeCode == "pr" ||
                localeCode == "it" ||
                localeCode == "ru" ||
                localeCode == "ko"
            )
                store.dispatch(setLanguage(languages[localeCode]));
        }
    }, []);

    return (
        <React.StrictMode>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </React.StrictMode>
    );
};

export default App;
