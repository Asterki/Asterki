/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";

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
                en: LangPackEN,
            };

            const localeCode = navigator.language.slice(0, 2);

            if (localeCode == "en") setLanguage(languages[localeCode]);
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
