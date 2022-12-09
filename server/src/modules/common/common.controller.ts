import { Controller, Get, QueryParams, UseBefore } from "routing-controllers";
import { CommonService } from "./common.service";
import { validate } from "../../shared/middlewares/validate";
import { SearchSchema } from "./schemas/search.schema";
import { z } from "zod";

@Controller("")
export class CommonController {
  service: CommonService;

  constructor() {
    this.service = new CommonService();
  }

  @Get("/search")
  @UseBefore(validate({ query: SearchSchema }))
  async searchUsers(@QueryParams() params: any) {
    return await this.service.searchUsers(params);
  }

  @Get("/stats")
  async getStats() {}
}
