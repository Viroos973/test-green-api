export const getIdInstance = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem("idInstance");
    }
};