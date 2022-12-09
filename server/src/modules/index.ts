import { AuthController } from "./auth/auth.controller";
import { CommonController } from "./common/common.controller";
import { UsersController } from "./users/users.controller";

export const controllers = [UsersController, AuthController, CommonController]; // we specify controllers we want to use
