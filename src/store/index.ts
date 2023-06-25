import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import pageReducer from "./pageSlice";

export const store = configureStore({
    reducer: {
        page: pageReducer,
    },
    middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
