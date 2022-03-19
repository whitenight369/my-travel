import i18n from "i18next";
import { ADD_LANGUE, CHANGE_LANGUE, LanguageActionTypes } from "./langueAction";

export interface LanguageState {
  language: "en" | "zh";
  languageList: { name: string; code: string }[];
}

const defaultState: LanguageState = {
  language: "zh",
  languageList: [
    { name: "中文", code: "zh" },
    { name: "English", code: "en" },
  ],
};

export default (state = defaultState, action:LanguageActionTypes) => {
  // console.log("action",action);
  
  switch (action.type) {
    case CHANGE_LANGUE:
      i18n.changeLanguage(action.payload); // 这样处理是不标准的，有副作用
      return { ...state, language: action.payload };
    case ADD_LANGUE:
      return {
        ...state,
        languageList: [...state.languageList, action.payload],
      };
    default:
      return state;
  }
}; 
