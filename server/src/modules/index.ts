import { AdminController } from "./admin/admin.controller";
import { AuthController } from "../prifile/users.controller
import { CommonController } from "./common/common.controller";
import { UsersController } from "./users/users.controller";

export const controllers = [UsersController, AuthController, CommonController, AdminController]; // we specify controllers we want to use
