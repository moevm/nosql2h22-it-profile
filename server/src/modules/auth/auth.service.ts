import { sign_in__body } from "./zod-schemas/sign-in.schema";
import { sign_up__body } from "./zod-schemas/sign-up.schema";
import * as jwt from "jsonwebtoken";
import { UserModel } from "../../models/users";
import { BadRequestError, UnauthorizedError } from "routing-controllers";
import * as bcrypt from "bcrypt";
import { InformationModel } from "../../models/informations";

export class AuthService {
  saltRounds = 10;

  async registration(props: Zod.infer<typeof sign_up__body>) {
    const password_hash = bcrypt.hashSync(props.password, this.saltRounds);

    const information = await new InformationModel({}).save();

    await UserModel.create({
      password: password_hash,
      email: props.email,
      first_name: props.first_name,
      last_name: props.last_name,
      roles: ["USER"],
      sex: props.sex,
      birth_date: props.birth_date,
      information,
    });

    return {
      status: 201,
      message: "user created successfull",
    };
  }

  async login(props: Zod.infer<typeof sign_in__body>) {
    const user = await UserModel.findOne({ email: props.email }).exec();
    if (!user) {
      throw new UnauthorizedError("");
    }

    if (!bcrypt.compareSync(props.password, user.password)) {
      throw new BadRequestError("wrong password or email");
    }

    return {
      access: jwt.sign(
        {
          sub: user.id,
          roles: user.roles,
        },
        "secret",
        {
          expiresIn: "3h",
        }
      ),
    };
  }
}
