import type { AxiosError } from 'axios';

export const errorInterceptor = (error: AxiosError) => {
    if (error.response?.status === 401) {
        localStorage.removeItem("idInstance");
        localStorage.removeItem("apiTokenInstance");
        if (!window.location.href.includes('login')) window.location.href = '/login';
    }
    return Promise.reject(error);
};