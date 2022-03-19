export const CHANGE_LANGUE="change_language";
export const ADD_LANGUE="add_language";

interface ChangeLanguageAction{
    type:typeof CHANGE_LANGUE,
    payload:"en"|"zh"
}
interface AddLanguageAction{
    type:typeof ADD_LANGUE,
    payload:{name:string,code:string}
}

export type LanguageActionTypes=ChangeLanguageAction|AddLanguageAction;

export const changeLangueActionCreator=(langueCode:"zh"|"en"):ChangeLanguageAction=>{
    return {
        type:CHANGE_LANGUE,
        payload:langueCode
    }
}
export  const addLanguageActionCreator=(name:string,code:string):AddLanguageAction=>{
    return {
        type:ADD_LANGUE,
        payload:{name,code}
    }
}