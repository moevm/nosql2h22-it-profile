import { UnauthorizedError, Action } from "routing-controllers";
import { UserModel } from "../models/users";
import * as jwt from "jsonwebtoken";

export async function authorizationChecker(action: Action, roles: string[]) {
  // here you can use request/response objects from action
  // also if decorator defines roles it needs to access the action
  // you can use them to provide granular access check
  // checker must return either boolean (true or false)
  // either promise that resolves a boolean value
  // demo code:
  const token = action.request.headers["authorization"].split(" ")[1];

  if (!token) {
    throw new UnauthorizedError();
  }

  const decoded = jwt.verify(token, "secret");
  const user_id = decoded.sub;
  const user = await UserModel.findById(user_id).exec();

  if (user && !roles.length) {
    return true;
  }

  return false;
}
