import { UnauthorizedError, Action } from "routing-controllers";
import { UserDocument, UsersModel } from "../models/users";
import * as jwt from "jsonwebtoken";

export async function currentUserChecker(
  action: Action
): Promise<Omit<UserDocument, "password" | "__v">> {
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
    throw new UnauthorizedError();
  }

  return user;
}
