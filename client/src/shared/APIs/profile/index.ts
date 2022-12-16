import {
    IContacts,
    IEducation,
    IExperience,
    ILanguage,
    ISkills,
    ISpecialty
} from '@interfaces';
import { axiosInstance } from '../axios';

class ProfileAPIs {
    async createLanguage(data: ILanguage) {
        return await axiosInstance.post(`languages/new`, data);
    }
    async createEducation(data: IEducation) {
        return await axiosInstance.post(`educations/new`, data);
    }
    async createSpecialty(data: ISpecialty) {
        return await axiosInstance.post(`specialties/new`, data);
    }
    async createSkill(data: ISkills) {
        return await axiosInstance.post(`skills/new`, data);
    }
    async createExperience(data: IExperience) {
        return await axiosInstance.post(`contacts/new`, data);
    }
    async createContact(data: IContacts) {
        return await axiosInstance.post(`expirences/new`, data);
    }

    async deleteLanguage(id: string) {
        return await axiosInstance.delete(`languages/${id}`);
    }
    async deleteEducation(id: string) {
        return await axiosInstance.delete(`educations/${id}`);
    }
    async deleteSpecialty(id: string) {
        return await axiosInstance.delete(`specialties/${id}`);
    }
    async deleteSkill(id: string) {
        return await axiosInstance.delete(`skills/${id}`);
    }
    async deleteContact(id: string) {
        return await axiosInstance.delete(`contacts/${id}`);
    }
    async deleteExperience(id: string) {
        return await axiosInstance.delete(`expirences/${id}`);
    }
}

export const profileAPIs = new ProfileAPIs();
