import { AnyZodObject } from "zod";
import { NextFunction, Request, Response } from "express";
import { ExpressMiddlewareInterface } from "routing-controllers";

export function validate({
  body,
  params,
  query,
}: {
  body?: AnyZodObject;
  query?: AnyZodObject;
  params?: AnyZodObject;
}) {
  return class implements ExpressMiddlewareInterface {
    use(request: Request, response: Response, next: NextFunction) {
      console.log(request.body);

      try {
        body?.parse(request.body);
        params?.parse(request.params);
        query?.parse(request.query);
        return next();
      } catch (error) {
        return response.status(400).json(error);
      }
    }
  };
}
