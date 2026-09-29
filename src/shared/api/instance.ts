import axios from "axios";
import {idInstanceInterceptor, errorInterceptor} from "./interceptors";

export const instance = axios.create({
    baseURL: `https://4100.api.green-api.com`,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

instance.interceptors.request.use(idInstanceInterceptor);
instance.interceptors.response.use(undefined, errorInterceptor);