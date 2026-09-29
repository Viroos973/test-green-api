import type { InternalAxiosRequestConfig } from 'axios';
import {getIdInstance} from "../../../utils/helpers";

export const idInstanceInterceptor = (config: InternalAxiosRequestConfig<any>) => {
    const idInstance = getIdInstance();

    if (idInstance) {
        config.url = `/waInstance${idInstance}${config.url}`;
    } else {
        localStorage.removeItem("idInstance");
        localStorage.removeItem("apiTokenInstance");
        if (!window.location.href.includes('login')) window.location.href = '/login';
    }

    return config;
};