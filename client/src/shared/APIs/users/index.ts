import { axiosInstance } from '../axios';

class UsersAPIs {
    async getUser(id: string) {
        return await axiosInstance.get(`users${id}`);
    }
}

export const usersAPIs = new UsersAPIs();
