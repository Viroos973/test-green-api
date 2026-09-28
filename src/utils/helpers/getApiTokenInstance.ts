export const getApiTokenInstance = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem("apiTokenInstance");
    }
};