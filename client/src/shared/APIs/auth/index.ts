import { IUser } from '@interfaces';
import { fetchInstance } from '../axios';

class AuthAPIs {
    async signUp(data: Omit<IUser, 'role' | 'information'>) {
        return await fetchInstance.post('sign-up', data);
    }

    async signIn(data: { password: string; login: string }) {
        return await fetchInstance.post('sign-in', data);
    }

    async signOut() {
        return await fetchInstance.get('sign-out');
    }
}

export const authAPIs = new AuthAPIs();
