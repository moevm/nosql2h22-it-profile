export interface IExperience {
    company: string; //   название компании, в которой
    //   работал пользователь (если это не
    //   личный проект)
    project_name: string; //   название проекта
    position_in_project: string; //   должность пользователя в проекте
    description: string; //   описание проекта
    start: number; //   дата начала работы над проектом
    end: number; //   дата конца работы над проектом
    links: string[]; //   ссылки на проект
    tech_stack: string[]; //   технологический стек проекта
}
