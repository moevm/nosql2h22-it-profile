import { Controller, Get } from "routing-controllers";
import { UsersService } from "./users.servise";

@Controller("/users")
export class UsersController {
  private readonly service: UsersService;

  constructor() {
    this.service = new UsersService();
  }

  @Get("/")
  async getUsers() {
    return await this.service.getUsers();
  }
}
