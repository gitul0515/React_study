import { combineReducers } from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import { tasks } from "./tasks";
import session from "redux-persist/lib/storage/session";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage: session,
  whitelist: ["tasks"],
};

const combinedReducer = combineReducers({ tasks: tasks.reducer });

export const rootReducer = persistReducer(persistConfig, combinedReducer);

export const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
  devTools: true,
});

export const persistor = persistStore(store as any);

export type RootState = ReturnType<typeof store.getState>;
