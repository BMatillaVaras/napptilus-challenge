export const setLocalStorage = (key, data) => {
    localStorage.setItem(key, data);
}

export const getLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return data;
}