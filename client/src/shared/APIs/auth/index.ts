import { IUser } from '@interfaces';
import { axiosInstance } from '../axios';

class AuthAPIs {
    async signUp(data: Omit<IUser, 'role' | 'information'>) {
        return await axiosInstance.post('sign-up', data);
    }

    async signIn(data: { password: string; login: string }) {
        return await axiosInstance.post('sign-in', data);
    }

    async signOut() {
        return await axiosInstance.get('sign-out');
    }
}

export const authAPIs = new AuthAPIs();
