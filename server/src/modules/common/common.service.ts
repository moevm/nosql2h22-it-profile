import { UserDocument } from "../../models";
import { UsersService } from "../profile/users.service";

interface IUserService {
  getUsers: (query: any, limit: number, skip: number) => Promise<any[]>;
  getUserForView: (id: string) => Promise<any>;
}

export class CommonService {
  userService!: IUserService;

  constructor() {
    this.userService = new UsersService();
  }

  async searchUsers(params: any) {
    let limit = parseInt(params.limit) ?? 10;
    let skip = limit * (parseInt(params.page) - 1) ?? 0;

    let searchedUsers: any = {};

    for (const [key, value] of Object.entries(params)) {
      console.log(key, value);
      if (!Array.isArray(value)) {
        params[key] = [value];
      }
    }

    if (params?.specialization) {
      if (searchedUsers["information.specialties"]) {
        searchedUsers["information.specialties"]["$elemMatch"]["direction"] = {
          $in: params.specialization,
        };
      } else {
        searchedUsers["information.specialties"] = {
          $elemMatch: { direction: { $in: params.specialization } },
        };
      }

      console.log(params.specialization);
    }

    if (params?.language) {
      searchedUsers["information.languages"] = {
        $elemMatch: { title: { $in: params.language } },
      };
    }

    if (params?.skills) {
      searchedUsers["information.skills"] = {
        $elemMatch: { title: { $in: params.skills } },
      };
    }

    if (params?.level) {
      if (searchedUsers["information.specialties"]) {
        searchedUsers["information.specialties"]["$elemMatch"]["level"] = {
          $in: params.level,
        };
      } else {
        searchedUsers["information.specialties"] = {
          $elemMatch: { level: { $in: params.level } },
        };
      }
    }

    if (params?.countries) {
      searchedUsers["information.country"] = { $in: params.countries };
    }

    // if (params?.experience_from) {
    //   searchedUsers.experience_from = params.experience_from;
    // }
    // if (params?.experience_to) {
    //   searchedUsers.experience_to = params.experience_to;
    // }

    // console.log(JSON.stringify(searchedUsers));

    searchedUsers["role"] = { $in: ['USER']}

    return await this.userService.getUsers(searchedUsers, limit, skip);
  }

  async getUserForView(id: string) {
    return await this.userService.getUserForView(id);
  }
}
