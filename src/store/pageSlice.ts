/* eslint-disable @typescript-eslint/no-var-requires */
import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

import LangPack from "../../shared/types/lang";
import LangPackEN from "../../shared/locales/en";

const languages = {
    // de: require("../../shared/locales/de").default as LangPack,
    en: LangPackEN,
    // es: require("../../shared/locales/es").default as LangPack,
    // fr: require("../../shared/locales/fr").default as LangPack,
    // pr: require("../../shared/locales/pr").default as LangPack,
};

interface InitialStateType {
    lang: typeof LangPack;
}

const initialState: InitialStateType = {
    lang: languages["en"],
};

export const pageSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        setLanguage: (state, value: PayloadAction<typeof LangPack>) => {
            state.lang = value.payload;
        },
    },
});

export default pageSlice.reducer;
export const { setLanguage } = pageSlice.actions;
