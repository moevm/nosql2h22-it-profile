import { UserDocument } from "../../models";
import { UsersService } from "../profile/users.service";

interface IUserService {
  getUsers: (limit: number, skip: number) => Promise<any[]>;
  getUserForView: (id: string) => Promise<any>;
}

export class CommonService {
  userService!: IUserService;

  constructor() {
    this.userService = new UsersService();
  }
  async searchUsers(params: any) {
    // const new_exp = new ExperiencesModel({});
    // await new_exp.save();

    let limit = parseInt(params.limit) ?? 10;
    let skip = limit * (parseInt(params.page) - 1) ?? 0;

    let searchedUsers: any = {}; // не знаю какой тут тип указать
    if (params?.specialization) {
      searchedUsers.specialization = params.specialization;
    }
    if (params?.language) {
      searchedUsers.language = params.language;
    }
    if (params?.skills) {
      searchedUsers.skills = params.skills;
    }
    if (params?.level) {
      searchedUsers.level = params.level;
    }
    if (params?.experience_from) {
      searchedUsers.experience_from = params.experience_from;
    }
    if (params?.experience_to) {
      searchedUsers.experience_to = params.experience_to;
    }

    // Здесь необходимо добавить запрос к БД для получения списка пользователей, которые удовлетворяют переданным параметрам
    // skip и limit нужны для пагинации

    return await this.userService.getUsers(limit, skip);
  }

  async getUserForView(id: string) {
    return await this.userService.getUserForView(id);
  }
}
