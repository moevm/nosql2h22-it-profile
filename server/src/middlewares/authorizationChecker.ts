import { UnauthorizedError, Action } from "routing-controllers";
import { UserModel } from "../models/users";
import * as jwt from "jsonwebtoken";

export async function authorizationChecker(action: Action, roles: string[]) {
  const token = action.request.headers["authorization"].split(" ")[1];

  if (!token) {
    throw new UnauthorizedError();
  }

  const decoded = jwt.verify(token, "secret");
  const user_id = decoded.sub;
  const user = await UserModel.findById(user_id)
    .select({
      password: 0,
      __v: 0,
    })
    .exec();

    
  if (user && roles.length) {
    for (const role of roles) {
      if (!user.roles.includes(role)) {
        return false;
      }
    }
    return true;
  }

  return false;
}
