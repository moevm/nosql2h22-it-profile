import {
  Authorized,
  Body,
  Controller,
  Delete,
  Params,
  Post,
  UseBefore,
  CurrentUser,
  Get,
} from "routing-controllers";
import { validate } from "../../shared/middlewares/validate";

import {
  CreateUserSchema,
  InsertContactSchema,
  InsertEducationSchema,
  InsertExperienceSchema,
  InsertLaguageSchema,
  InsertSkillSchema,
  InsertSpecialtySchema,
  IdSchema,
  IdSchemaType,
  InsertLaguagePropType,
  InsertContactPropType,
  InsertEducationPropType,
  InsertExperiencePropType,
  InsertSkillPropType,
  InsertSpecialtyPropType,
} from "./zod-schemas";
import { UsersService } from "./users.service";
import { UserDocument } from "../../models/users";

@Controller("/profile")
@Authorized(["USER"])
export class UsersController {
  private readonly service: UsersService;

  constructor() {
    this.service = new UsersService();
  }

  @Get("/")
  async getUserInfo(
    @CurrentUser() user: Omit<UserDocument, "password" | "__V">
  ) {
    return await this.service.getUserInfo(user.id);
  }

  @Post("/language")
  @UseBefore(validate({ body: InsertLaguageSchema }))
  async addLanguage(
    @CurrentUser() user: Omit<UserDocument, "password" | "__V">,
    @Body() body: InsertLaguagePropType
  ) {
    return await this.service.addLanguage(body, user.id);
  }

  @Delete("/language/:id")
  @UseBefore(validate({ params: IdSchema }))
  async deleteLanguage(
    @CurrentUser() user: Omit<UserDocument, "password" | "__V">,
    @Params() params: IdSchemaType
  ) {
    return await this.service.deleteLanguage(params.id, user.id);
  }

  @Post("/education")
  @UseBefore(validate({ body: InsertEducationSchema }))
  async addEducation(
    @CurrentUser() user: Omit<UserDocument, "password" | "__V">,
    @Body() body: InsertEducationPropType
  ) {
    return await this.service.addEducation(body, user.id);
  }

  @Delete("/education/:id")
  @UseBefore(validate({ params: IdSchema }))
  async deleteEducation(
    @CurrentUser() user: Omit<UserDocument, "password" | "__V">,
    @Params() params: IdSchemaType
  ) {
    return await this.service.deleteEducation(params.id, user.id);
  }

  @Post("/specialty")
  @UseBefore(validate({ body: InsertSpecialtySchema }))
  async addSpecialty(
    @CurrentUser() user: Omit<UserDocument, "password" | "__V">,
    @Body() body: InsertSpecialtyPropType
  ) {
    return await this.service.addSpecialty(body, user.id);
  }

  @Delete("/specialty/:id")
  @UseBefore(validate({ params: IdSchema }))
  async deleteSpecialty(
    @CurrentUser() user: Omit<UserDocument, "password" | "__V">,
    @Params() params: IdSchemaType
  ) {
    return await this.service.deleteSpecialty(params.id, user.id);
  }

  @Post("/skill")
  @UseBefore(validate({ body: InsertSkillSchema }))
  async addSkill(
    @CurrentUser() user: Omit<UserDocument, "password" | "__V">,
    @Body() body: InsertSkillPropType
  ) {
    return await this.service.addSkill(body, user.id);
  }

  @Delete("/skill/:id")
  @UseBefore(validate({ params: IdSchema }))
  async deleteSkill(
    @CurrentUser() user: Omit<UserDocument, "password" | "__V">,
    @Params() params: IdSchemaType
  ) {
    return await this.service.deleteSkill(params.id, user.id);
  }

  @Post("/contact")
  @UseBefore(validate({ body: InsertContactSchema }))
  async addContact(
    @CurrentUser() user: Omit<UserDocument, "password" | "__V">,
    @Body() body: InsertContactPropType
  ) {
    return await this.service.addContact(body, user.id);
  }

  @Delete("/contact/:id")
  @UseBefore(validate({ params: IdSchema }))
  async deleteContact(
    @CurrentUser() user: Omit<UserDocument, "password" | "__V">,
    @Params() params: IdSchemaType
  ) {
    return await this.service.deleteContact(params.id, user.id);
  }

  @Post("/expirence")
  @UseBefore(validate({ body: InsertExperienceSchema }))
  async addExperience(
    @CurrentUser() user: Omit<UserDocument, "password" | "__V">,
    @Body() body: InsertExperiencePropType
  ) {
    return await this.service.addExperience(body, user.id);
  }

  @Delete("/expirence/:id")
  @UseBefore(validate({ params: IdSchema }))
  async deleteExperience(
    @CurrentUser() user: Omit<UserDocument, "password" | "__V">,
    @Params() params: IdSchemaType
  ) {
    return await this.service.deleteExperience(params.id, user.id);
  }
}
