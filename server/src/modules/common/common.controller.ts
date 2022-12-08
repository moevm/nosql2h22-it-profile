import { Controller, Get, QueryParams } from "routing-controllers";
import { CommonService } from "./common.service";

@Controller("")
export class CommonController {
  service: CommonService;

  constructor() {
    this.service = new CommonService();
  }

  @Get("/search")
  async searchUsers(@QueryParams() params: any) {
    return await this.service.searchUsers(params);
  }

  @Get("/stats")
  async getStats() {}
}
