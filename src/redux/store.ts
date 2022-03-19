import { createStore } from "redux";
import languageReducer from "./langue/languageReducer";


const store=createStore(languageReducer);

export type RootState=ReturnType<typeof store.getState>;

export default store;