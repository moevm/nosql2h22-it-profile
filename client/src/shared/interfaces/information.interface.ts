import {
    IContacts,
    IEducation,
    IExperience,
    ISpecialty,
    ISkills
} from '@interfaces';

export interface IInformation {
    city: string; //   город проживания
    about: string; //   информация "о себе"
    country: string; //   страна проживания
    specialties: ISpecialty[]; //   специализации пользователя
    contacts: IContacts[]; //   список контактов
    educations: IEducation[]; //   список образований
    favorites: string[]; //   список избранных пользователей
    experiences: IExperience[]; //   список проектов (опыт работы)
    languages: string[]; //   список языков
    skills: ISkills[]; //   список навыков
}
