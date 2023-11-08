"use client";

import React, { createContext } from "react";
import { debugGlobalStateStore } from "../store/DevGlobalStateStore";
import { GlobalStateStore, globalStore } from "../store/GlobalStateStore";

interface GlobalStateContextProps {
    children: React.ReactNode;
}

const stateStore = process.env.NODE_ENV === "development" ? debugGlobalStateStore : globalStore;

export const GlobalStateContext = createContext<GlobalStateStore>(stateStore);

export default function StateProvider(props: GlobalStateContextProps) {
    return <GlobalStateContext.Provider value={stateStore}>{props.children}</GlobalStateContext.Provider>;
}
