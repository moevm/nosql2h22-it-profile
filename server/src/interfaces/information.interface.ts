import {
  IContacts,
  IEducation,
  IExperience,
  ISpecialty,
  ISkills,
  ILanguages,
} from ".";

export interface IInformation {
  city: string; //   город проживания
  about: string; //   информация "о себе"
  country: string; //   страна проживания
  specialties: ISpecialty[]; //   специализации пользователя
  contacts: IContacts[]; //   список контактов
  educations: IEducation[]; //   список образований
  favorites: string[]; //   список избранных пользователей
  experiences: IExperience[]; //   список проектов (опыт работы)
  languages: ILanguages[]; //   список языков
  skills: ISkills[]; //   список навыков
}
