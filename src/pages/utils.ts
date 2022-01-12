export const getLangFromSearch = (search: string) => {
    const param = search.substring(0,6);
    const lang = search.substring(6,8);

    if(param === '?lang=' && (lang === 'en' || lang === 'fi' || lang === 'sk')) {
        return lang;
    }
    return "";
}