import { fetchInstance } from '../axios';

class CrmAPIs {
    async login(data: { password: string; login: string }) {
        return await fetchInstance.post('crm/login', data);
    }

    async logOut() {
        return await fetchInstance.get('crm/logout');
    }

    async exportData(props: any) {
        return await fetchInstance.post('crm/export-data', props);
    }

    async importData() {
        return await fetchInstance.get('crm/import-data');
    }
}

export const crmAPIs = new CrmAPIs();
