import { Types } from "mongoose";
import {
  EducationModel,
  ExperiencesModel,
  InformationModel,
  UserModel,
} from "../../models";
import {
  InsertLaguagePropType,
  InsertContactPropType,
  InsertEducationPropType,
  InsertExperiencePropType,
  InsertSkillPropType,
  InsertSpecialtyPropType,
} from "./zod-schemas";

type mongo_child = {
  pull: (id: Types.ObjectId) => any;
};

export class UsersService {
  async addEducation(body: InsertEducationPropType, information_id: string) {
    const new_education = await EducationModel.create(body);

    return await InformationModel.findByIdAndUpdate(information_id, {
      $push: {
        educations: [new_education._id],
      },
    }).exec();
  }

  async deleteEducation(id: string, information_id: string) {
    await EducationModel.findByIdAndDelete(id).exec();
    return await InformationModel.findByIdAndUpdate(information_id, {
      $pull: {
        educations: [new Types.ObjectId(id)],
      },
    }).exec();
  }

  async addExperience(body: InsertExperiencePropType, information_id: string) {
    const new_experience = await ExperiencesModel.create(body);

    await InformationModel.findByIdAndUpdate(information_id, {
      $pull: {
        experiences: [new_experience._id],
      },
    }).exec();
  }

  async deleteExperience(id: string, information_id: string) {
    await ExperiencesModel.findByIdAndDelete(id).exec();
    return await InformationModel.findByIdAndUpdate(information_id, {
      $pull: {
        experiences: [new Types.ObjectId(id)],
      },
    }).exec();
  }

  async addSpecialty(body: InsertSpecialtyPropType, information_id: string) {
    const info = await InformationModel.findById(information_id).exec();

    if (info) {
      info.specialties.push(body);
    }

    return info?.save();
  }

  async deleteSpecialty(id: string, information_id: string) {
    const info = await InformationModel.findById(information_id).exec();

    if (info) {
      (info.specialties as unknown as mongo_child).pull(new Types.ObjectId(id));
    }

    return info?.save();
  }

  async addSkill(body: InsertSkillPropType, information_id: string) {
    const info = await InformationModel.findById(information_id).exec();

    if (info) {
      info.skills.push(body);
    }

    return info?.save();
  }

  async deleteSkill(id: string, information_id: string) {
    const info = await InformationModel.findById(information_id).exec();

    if (info) {
      (info.skills as unknown as mongo_child).pull(new Types.ObjectId(id));
    }

    return info?.save();
  }

  async addContact(body: InsertContactPropType, information_id: string) {
    const info = await InformationModel.findById(information_id).exec();

    if (info) {
      info.contacts.push(body);
    }

    return info?.save();
  }

  async deleteContact(id: string, information_id: string) {
    const info = await InformationModel.findById(information_id).exec();

    if (info) {
      (info.contacts as unknown as mongo_child).pull(new Types.ObjectId(id));
    }

    return info?.save();
  }

  async deleteLanguage(id: string, information_id: string) {
    const info = await InformationModel.findById(information_id).exec();

    if (info) {
      (info.languages as unknown as mongo_child).pull(new Types.ObjectId(id));
    }

    return info?.save();
  }

  async addLanguage(body: InsertLaguagePropType, information_id: string) {
    const info = await InformationModel.findById(information_id).exec();

    if (info) {
      info.languages.push(body);
    }

    return info?.save();
  }

  async getUsers(limit: number, skip: number) {
    return await UserModel.find({})
      .select("-password -roles")
      .populate({
        path: "information",
        populate: [
          {
            path: "experiences",
          },
          {
            path: "educations",
          },
        ],
      })
      .skip(skip)
      .limit(limit)
      .exec();
  }

  async getUserInfo(id: string) {
    return await UserModel.findById(id)
      .select("-password -roles")
      .populate({
        path: "information",
        populate: [
          {
            path: "experiences",
          },
          {
            path: "educations",
          },
          {
            path: "favorites",
            select: "-password -roles",
            populate: {
              path: "information",
              populate: [
                {
                  path: "experiences",
                },
                {
                  path: "educations",
                },
              ],
            },
          },
        ],
      })
      .exec();
  }

  async getUserForView(id: string) {
    return await UserModel.findById(id)
      .select("-password -roles")
      .populate({
        path: "information",
        populate: [
          {
            path: "experiences",
          },
          {
            path: "educations",
          },
        ],
      })
      .exec();
  }
}
