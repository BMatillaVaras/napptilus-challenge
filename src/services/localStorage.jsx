import { EXPIRE_TIME } from "../utils/constants";

export const removeLocalStorage = (key) => {
    localStorage.removeItem(key);
}

export const setLocalStorage = (key, data) => {
    localStorage.setItem(key, data);

    let timer;
    timer = setTimeout(() => {
        removeLocalStorage(key);
        timer && clearTimeout(timer);
    }, EXPIRE_TIME);
}

export const getLocalStorage = (key) => {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
}