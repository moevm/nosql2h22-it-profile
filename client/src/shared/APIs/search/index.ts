import { axiosInstance } from '../axios';

class SearchAPIs {
    async users(params: Record<string, any>) {
        return await axiosInstance.get('search', {
            params
        });
    }
}

export const searchAPIs = new SearchAPIs();
