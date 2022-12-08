import { IInformation } from "@interfaces"

export interface IUser {
    email: string                         //   почта пользователя 
    first_name: string                    //   имя
    last_name: string                     //   фамилия
    birth_date: number                    //   дата рождения
    sex: string                           //   пол
    role: string[]                        //   роль пользователя
    information: IInformation             //   ссылка на дополнительную информацию
    photo?: string
}