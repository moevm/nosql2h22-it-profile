import { IEducation } from "./education";
import { IExperience } from "./experience";

export interface IAdditionalInformation {
    city: string;
    about: string;
    country: string;
    specialties: ISpecialty[];
    contacts: IContacts[];
    educations: IEducation[];
    favorites: string[];
    experiences: IExperience[];
    languages: string[];
    skills: string[];
}

interface ISpecialty {
    direction: string;
    level: string;
}

interface IContacts {
    type: string;
    value: string;
}