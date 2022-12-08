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
} from "routing-controllers";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UsersService } from "./users.service";

@Controller("/users")
export class UsersController {
  private readonly service: UsersService;

  constructor() {
    this.service = new UsersService();
  }

  @Get("/:id")
  async getInfo() {}

  @Put("/:id")
  async updateUser(@Body() body: CreateUserDto, @Res() res: Response) {
    return body;
  }

}
