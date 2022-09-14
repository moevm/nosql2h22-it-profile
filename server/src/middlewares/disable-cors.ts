import { Middleware, ExpressMiddlewareInterface } from "routing-controllers";
import { NextFunction, Request, Response } from "express";

@Middleware({ type: "before" })
export class DisableCorsMiddleware implements ExpressMiddlewareInterface {
  use(request: any, response: any, next: NextFunction): void {
    response.header("Access-Control-Allow-Origin", "*");
    next();
  }
}
