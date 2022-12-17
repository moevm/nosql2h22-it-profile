import { fetchInstance } from '../axios';

class UsersAPIs {
    async getUser(id: string) {
        return await fetchInstance.get(`users${id}`);
    }
}

export const usersAPIs = new UsersAPIs();
