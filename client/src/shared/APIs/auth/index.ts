import { IUser } from '@interfaces';
import { fetchInstance } from '../fetch';

class AuthAPIs {
    async signUp(data: Omit<IUser, 'role' | 'information'>) {
        return await fetchInstance.post('auth/sign-up', data);
    }

    async signIn(data: { password: string; login: string }) {
        return await fetchInstance.post('auth/sign-in', data);
    }

    async signOut() {
        return await fetchInstance.get('auth/sign-out');
    }
}

export const authAPIs = new AuthAPIs();
