export const fetchInstance = {
    baseURL: 'http://178.70.100.2:80/',

    async get(
        path: string,
        config?: RequestInit & { params: Record<string, any> }
    ) {
        const url = new URL(this.baseURL + path);
        const params: [string, string][] = [];

        if (config?.params) {
            for (const [key, value] of Object.entries(config.params)) {
                if (Array.isArray(value)) {
                    const items: [string, any][] = value.map((item) => [
                        key,
                        item
                    ]);
                    params.push(...items);
                } else {
                    params.push([key, value]);
                }
            }
        }

        url.search = new URLSearchParams(params).toString();

        const token = window.localStorage.getItem('access_token');

        const options: RequestInit = {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                ...config?.headers,
                Authorization: token ? 'Bearer ' + token : ''
            },
            mode: 'cors',
            referrerPolicy: 'origin'
            // credentials: "include"
        };

        const response = await fetch(url, options);

        if (response.ok) {
            return await response.json();
        }
    },

    async post(
        path: string,
        data: any,
        config?: RequestInit & { params: Record<string, string> }
    ) {
        const url = new URL(this.baseURL + path);
        const params: [string, string][] = [];

        if (config?.params) {
            for (const [key, value] of Object.entries(config.params)) {
                if (Array.isArray(value)) {
                    const items: [string, any][] = value.map((item) => [
                        key,
                        item
                    ]);
                    params.push(...items);
                } else {
                    params.push([key, value]);
                }
            }
        }

        url.search = new URLSearchParams(params).toString();

        const token = window.localStorage.getItem('access_token');

        const options: RequestInit = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                Authorization: token ? 'Bearer ' + token : '',
                ...config?.headers
            },
            mode: 'cors',
            referrerPolicy: 'origin'
            // credentials: "include"
        };

        const response = await fetch(url, options);

        if (response.ok) {
            return await response.json();
        }
        return await response.json();
    },

    async delete(
        path: string,
        data?: any,
        config?: RequestInit & { params: Record<string, string> }
    ) {
        const url = new URL(this.baseURL + path);
        const params: [string, string][] = [];

        if (config?.params) {
            for (const [key, value] of Object.entries(config.params)) {
                if (Array.isArray(value)) {
                    const items: [string, any][] = value.map((item) => [
                        key,
                        item
                    ]);
                    params.push(...items);
                } else {
                    params.push([key, value]);
                }
            }
        }

        url.search = new URLSearchParams(params).toString();

        const token = window.localStorage.getItem('access_token');

        const options: RequestInit = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                Authorization: token ? 'Bearer ' + token : '',
                ...config?.headers
            },
            mode: 'cors',
            referrerPolicy: 'origin'
            // credentials: "include"
        };

        const response = await fetch(url, options);

        if (response.ok) {
            return await response.json();
        }
        return await response.json();
    },

    async put(
        path: string,
        data: any,
        config?: RequestInit & { params: Record<string, string> }
    ) {
        const url = new URL(this.baseURL + path);
        const params: [string, string][] = [];

        if (config?.params) {
            for (const [key, value] of Object.entries(config.params)) {
                if (Array.isArray(value)) {
                    const items: [string, any][] = value.map((item) => [
                        key,
                        item
                    ]);
                    params.push(...items);
                } else {
                    params.push([key, value]);
                }
            }
        }

        url.search = new URLSearchParams(params).toString();

        const token = window.localStorage.getItem('access_token');

        const options: RequestInit = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                Authorization: token ? 'Bearer ' + token : '',
                ...config?.headers
            },
            mode: 'cors',
            referrerPolicy: 'origin'
            // credentials: "include"
        };

        const response = await fetch(url, options);

        if (response.ok) {
            return await response.json();
        }
        return await response.json();
    }
};
