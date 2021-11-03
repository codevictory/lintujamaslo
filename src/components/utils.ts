export const capFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const arrayToString = (str: string) => {
    return str.toString().replaceAll(",", ", ");
}