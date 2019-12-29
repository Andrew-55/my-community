export const required = value => {
    if (value) return undefined;
    return "Field is required";
}
export const maxLenghtCreator = (maxlenght) => (value) => {

    if (value.length > maxlenght) {
        return `Max lenght is ${maxlenght} symbols`;
    } else {
        return undefined;
    }
}

