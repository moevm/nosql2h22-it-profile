import { IUser } from '../../interfaces/user.interface';
import { axiosInstance, fetchInstance } from '../axios';

class SearchAPIs {
    async users(params: Record<string, any>): Promise<IUser[]> {
        return fetchInstance.get('search', {
            params: {
                limit: 100,
                page: 1,
                ...params
            }
        });
    }
}

export const searchAPIs = new SearchAPIs();
