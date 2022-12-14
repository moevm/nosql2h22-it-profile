import {
  Controller,
  Get,
  Params,
  QueryParams,
  Res,
  UseBefore,
} from "routing-controllers";
import { CommonService } from "./common.service";
import { validate } from "../../shared/middlewares/validate";
import { SearchSchema } from "./zod-schemas/search.schema";
import { IdSchema, IdSchemaType } from "./zod-schemas/Id";
import { Response } from "express";

@Controller("")
export class CommonController {
  service: CommonService;

  constructor() {
    this.service = new CommonService();
  }

  @Get("/search")
  @UseBefore(validate({ query: SearchSchema }))
  async searchUsers(@QueryParams() params: any, @Res() res: Response) {
    return res.send(await this.service.searchUsers(params));
  }

  @Get("/stats")
  async getStats() {}

  @Get("/users/:id")
  @UseBefore(validate({ params: IdSchema }))
  async getUserForView(@Params() params: IdSchemaType, @Res() res: Response) {
    return res.send(await this.service.getUserForView(params.id));
  }
}
