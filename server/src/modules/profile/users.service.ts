import { Types } from "mongoose";
import {
  EducationsModel,
  ExperiencesModel,
  InformationsModel,
  UsersModel,
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
    const new_education = await EducationsModel.create(body);

    return await InformationsModel.findByIdAndUpdate(information_id, {
      $push: {
        educations: [new_education._id],
      },
    }).exec();
  }

  async deleteEducation(id: string, information_id: string) {
    await EducationsModel.findByIdAndDelete(id).exec();
    return await InformationsModel.findByIdAndUpdate(information_id, {
      $pull: {
        educations: [new Types.ObjectId(id)],
      },
    }).exec();
  }

  async addExperience(body: InsertExperiencePropType, information_id: string) {
    const new_experience = await ExperiencesModel.create(body);

    await InformationsModel.findByIdAndUpdate(information_id, {
      $pull: {
        experiences: [new_experience._id],
      },
    }).exec();
  }

  async deleteExperience(id: string, information_id: string) {
    await ExperiencesModel.findByIdAndDelete(id).exec();
    return await InformationsModel.findByIdAndUpdate(information_id, {
      $pull: {
        experiences: [new Types.ObjectId(id)],
      },
    }).exec();
  }

  async addSpecialty(body: InsertSpecialtyPropType, information_id: string) {
    const info = await InformationsModel.findById(information_id).exec();

    if (info) {
      info.specialties.push({
        direction: body.direction,
        level: body.level,
      });
    }

    return info?.save();
  }

  async deleteSpecialty(id: string, information_id: string) {
    const info = await InformationsModel.findById(information_id).exec();

    if (info) {
      (info.specialties as unknown as mongo_child).pull(new Types.ObjectId(id));
    }

    return info?.save();
  }

  async addSkill(body: InsertSkillPropType, information_id: string) {
    const info = await InformationsModel.findById(information_id).exec();

    if (info) {
      info.skills.push({
        title: body.title,
        level: body.level,
      });
    }

    return info?.save();
  }

  async deleteSkill(id: string, information_id: string) {
    const info = await InformationsModel.findById(information_id).exec();

    if (info) {
      (info.skills as unknown as mongo_child).pull(new Types.ObjectId(id));
    }

    return info?.save();
  }

  async addContact(body: InsertContactPropType, information_id: string) {
    const info = await InformationsModel.findById(information_id).exec();

    if (info) {
      info.contacts.push({
        type: body.type,
        value: body.type,
      });
    }

    return info?.save();
  }

  async deleteContact(id: string, information_id: string) {
    const info = await InformationsModel.findById(information_id).exec();

    if (info) {
      (info.contacts as unknown as mongo_child).pull(new Types.ObjectId(id));
    }

    return info?.save();
  }

  async deleteLanguage(id: string, information_id: string) {
    const info = await InformationsModel.findById(information_id).exec();

    if (info) {
      (info.languages as unknown as mongo_child).pull(new Types.ObjectId(id));
    }

    return info?.save();
  }

  async addLanguage(body: InsertLaguagePropType, information_id: string) {
    const info = await InformationsModel.findById(information_id).exec();

    if (info) {
      info.languages.push({
        title: body.title,
        level: body.level,
      });
    }

    return info?.save();
  }

  async getUsers(query: any, limit: number, skip: number) {
    
    return await UsersModel.aggregate([
      {
        $lookup: {
          from: "informations",
          localField: "information",
          foreignField: "_id",
          as: "information",
        },
      },
      {
        $unwind: "$information",
      },
      {
        $match: query,
        
      },
      // {
      //   $match: {"information.country": {$in: ['Russia']}}
            // "information.skills": {
            //   $elemMatch: { title: { $in: ["React", "Android"] } },
            // },
      // }
    ])
      .skip(skip)
      .limit(limit);
  }

  async getUserInfo(id: string) {
    return await UsersModel.findById(id)
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
    return await UsersModel.findById(id)
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
