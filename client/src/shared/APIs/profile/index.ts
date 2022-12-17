import {
    IContacts,
    IEducation,
    IExperience,
    ILanguage,
    ISkills,
    ISpecialty
} from '@interfaces';
import { fetchInstance } from '../fetch';

class ProfileAPIs {
    async createLanguage(data: ILanguage) {
        return await fetchInstance.post(`languages/new`, data);
    }
    async createEducation(data: IEducation) {
        return await fetchInstance.post(`educations/new`, data);
    }
    async createSpecialty(data: ISpecialty) {
        return await fetchInstance.post(`specialties/new`, data);
    }
    async createSkill(data: ISkills) {
        return await fetchInstance.post(`skills/new`, data);
    }
    async createExperience(data: IExperience) {
        return await fetchInstance.post(`contacts/new`, data);
    }
    async createContact(data: IContacts) {
        return await fetchInstance.post(`expirences/new`, data);
    }

    async deleteLanguage(id: string) {
        return await fetchInstance.delete(`languages/${id}`);
    }
    async deleteEducation(id: string) {
        return await fetchInstance.delete(`educations/${id}`);
    }
    async deleteSpecialty(id: string) {
        return await fetchInstance.delete(`specialties/${id}`);
    }
    async deleteSkill(id: string) {
        return await fetchInstance.delete(`skills/${id}`);
    }
    async deleteContact(id: string) {
        return await fetchInstance.delete(`contacts/${id}`);
    }
    async deleteExperience(id: string) {
        return await fetchInstance.delete(`expirences/${id}`);
    }
}

export const profileAPIs = new ProfileAPIs();
