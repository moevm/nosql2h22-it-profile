import { ExperiencesModel } from "../../models/experiences";

export class CommonService {
  async searchUsers(params: any) {
    const new_exp = new ExperiencesModel({});

    await new_exp.save();

    return new_exp;
  }
}
