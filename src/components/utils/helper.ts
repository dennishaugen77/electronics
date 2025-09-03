export const changeToTitle = (param: string | undefined) => {
    if (param && param.includes('-')) {
        return param.split('-').join(' ');
    } else return param
}