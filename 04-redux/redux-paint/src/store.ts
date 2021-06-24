import { rootReducer } from "./rootReducer";
import { devToolsEnhancer } from "redux-devtools-extension";
import { createStore } from "redux";


export const store = createStore(rootReducer, devToolsEnhancer({}))