import { atom } from 'recoil';

export const currentLanguage = atom<string>({
    key: "currentLanguage",
    default: "fi"
})