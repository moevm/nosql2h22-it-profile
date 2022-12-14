import { CreateUserSchema } from "./schemas/create-user.schema";
import { LanguageEditSchema } from "./schemas/language-edit.schema";
import { BadRequestError, UnauthorizedError } from "routing-controllers";
import { UserModel } from "../../models/users";
import { z } from "zod";

export class UsersService {
  async edit_language(props: z.infer<typeof LanguageEditSchema>) {
    if (props.languages.length === 0) {
      throw new BadRequestError("wrong password or email");
    }

    // DB work

    return "ok";
  }
}
