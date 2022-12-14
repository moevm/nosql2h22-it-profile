import { IInformation } from '.';

export interface IUser {
    id: string,
    email: string; 
    first_name: string; 
    last_name: string; 
    birth_date: number; 
    sex: string; 
    roles: string[]; 
    information: IInformation; 
    photo?: string
    password: string
}
