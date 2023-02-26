import { EXPIRE_TIME } from "../utils/constants";

export const setLocalStorage = (key, data) => {
    const item = {
        data: data,
        time: Date.now() + EXPIRE_TIME,
    }
    localStorage.setItem(key, JSON.stringify(item));
}

export const getLocalStorage = (key) => {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
}