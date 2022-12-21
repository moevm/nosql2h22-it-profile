import { UnauthorizedError, Action } from "routing-controllers";
import { UsersModel } from "../models/users";
import * as jwt from "jsonwebtoken";

export async function authorizationChecker(action: Action, roles: string[]) {
  const token = action.request.headers["authorization"].split(" ")[1];

  if (!token) {
    throw new UnauthorizedError();
  }

  const decoded = jwt.verify(token, "secret");
  const user_id = decoded.sub;
  const user = await UsersModel.findById(user_id)
    .select({
      password: 0,
      __v: 0,
    })
    .exec();

  if (!user) {
    return false;
  }

  const checkRole = (arr: string[]): boolean => {
    let boolValues = [];
    for (const role of roles) {
      if (user.roles.includes(role)) {
        boolValues.push(true);
      }
    }
    return boolValues.length > 0;
  };

  return checkRole(user.roles);
}
