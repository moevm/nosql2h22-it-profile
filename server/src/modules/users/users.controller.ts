import { Response } from "express";
import { Authorized, Body, Controller, Param, Post, Put, Res, UseBefore } from "routing-controllers";
import { validate } from "../../shared/middlewares/validate";
import { CreateUserSchema } from "./schemas/create-user.schema";
import { LanguageEditSchema } from "./schemas/language-edit.schema"
import { UsersService } from "./users.service";
import { z } from "zod";

@Controller("users")
@Authorized(["USER"])
export class UsersController {
  private readonly service: UsersService;

  constructor() {
    this.service = new UsersService();
  }

  @Post("/")
  @UseBefore(validate({ body: CreateUserSchema }))
  async getInfo(@Body() body: z.infer<typeof CreateUserSchema>, @Res() res: Response) {
    return res.status(200).send("ok");
  }

  @Put("/:id/languages")
  @UseBefore(validate({ body: LanguageEditSchema }))
  async editLanguage(@Body() body: z.infer<typeof LanguageEditSchema>, @Param("id") id: number, @Res() res: Response) {
    return res.status(200).send(await this.service.edit_language(body))
  }
}
