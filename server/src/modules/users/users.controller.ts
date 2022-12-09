import { Request, Response } from "express";
import {
  Body,
  Controller,
  Get,
  Params,
  Post,
  Put,
  QueryParams,
  Req,
  Res,
  UseBefore,
} from "routing-controllers";
import { validate } from "../../shared/middlewares/validate";
import { CreateUserSchema } from "./schemas/create-user.schema";
import { UsersService } from "./users.service";
import { z } from "zod";

@Controller("/users")
export class UsersController {
  private readonly service: UsersService;

  constructor() {
    this.service = new UsersService();
  }

  @Post("/")
  @UseBefore(validate({ body: CreateUserSchema }))
  async getInfo(@Body() body: z.infer<typeof CreateUserSchema>) {
    
    return "okkkk";
  }
}
