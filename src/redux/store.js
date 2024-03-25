import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { catalogReducer } from "./catalog/catalogSlice";

const catalogPersistConfig = {
    key: "favorites",
    storage,
    whitelist: ["favorites"],
};

export const store = configureStore({
    reducer: {
        catalog: persistReducer(catalogPersistConfig, catalogReducer),
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store);
