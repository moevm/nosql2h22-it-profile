import { IInformation } from '.';

export interface IUser {
    email: string; 
    first_name: string; 
    last_name: string; 
    birth_date: number; 
    sex: string; 
    role: string[]; 
    information: IInformation; 
    photo?: string
    password: string
}
