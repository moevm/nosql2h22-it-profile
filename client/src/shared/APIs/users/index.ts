import { fetchInstance } from '../fetch';

class UsersAPIs {
    async getUser(id: string) {
        return await fetchInstance.get(`users${id}`);
    }
}

export const usersAPIs = new UsersAPIs();
