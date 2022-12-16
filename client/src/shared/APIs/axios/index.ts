import axios, { AxiosInterceptorOptions, AxiosRequestConfig } from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://backend:443/',
    timeout: 0,
    headers: {
        'Content-type': 'application/json'
    }
});

export const fetchInstance = {
    baseURL: 'http://178.70.100.2:80/',
    async get(
        path: string,
        config?: RequestInit & { params: Record<string, any> }
    ) {
        const url = new URL(this.baseURL + path);
        url.search = new URLSearchParams(config?.params).toString();

        const options: RequestInit = {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                ...config?.headers
            },
            mode: 'no-cors',
            referrerPolicy: 'no-referrer',
            credentials: 'include'
        };

        console.log(url, options);
        const response = await fetch(url, options);

        return await response.json();
    },

    async post(
        path: string,
        data: any,
        config?: RequestInit & { params: Record<string, string> }
    ) {
        const url = new URL(this.baseURL + path);
        url.search = new URLSearchParams(config?.params).toString();

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                ...config?.headers
            }
        });
        return await response.json();
    },

    async delete(
        path: string,
        data: any,
        config?: RequestInit & { params: Record<string, string> }
    ) {
        const url = new URL(this.baseURL + path);
        url.search = new URLSearchParams(config?.params).toString();

        const response = await fetch(url, {
            method: 'DELETE',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                ...config?.headers
            }
        });
        return await response.json();
    },

    async put(
        path: string,
        data: any,
        config?: RequestInit & { params: Record<string, string> }
    ) {
        const url = new URL(this.baseURL + path);
        url.search = new URLSearchParams(config?.params).toString();

        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                ...config?.headers
            }
        });
        return await response.json();
    }
};
