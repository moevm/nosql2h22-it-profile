import { axiosInstance } from '../axios';

class CrmAPIs {
    async login(data: { password: string; login: string }) {
        return await axiosInstance.post('crm/login', data);
    }

    async logOut() {
        return await axiosInstance.get('crm/logout');
    }

    async exportData(props: any) {
        return await axiosInstance.post('crm/export-data', props);
    }

    async importData() {
        return await axiosInstance.get('crm/import-data');
    }
}

export const crmAPIs = new CrmAPIs();
