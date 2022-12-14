import { Body, Controller, Post, Res, UseBefore } from "routing-controllers";
import { validate } from "../../shared/middlewares/validate";
import { AuthService } from "./auth.service";
import { sign_in__body } from "./zod-schemas/sign-in.schema";
import { sign_up__body } from "./zod-schemas/sign-up.schema";
import { Response } from "express";

@Controller("/auth")
export class AuthController {
  private service!: AuthService;

  constructor() {
    this.service = new AuthService();
  }

  @Post("/sign-up")
  @UseBefore(validate({ body: sign_up__body }))
  async registration(
    @Body() body: Zod.infer<typeof sign_up__body>,
    @Res() res: Response
  ) {
    return res.status(201).send(await this.service.registration(body));
  }

  @Post("/sign-in")
  @UseBefore(validate({ body: sign_in__body }))
  async login(@Body() body: any, @Res() res: Response) {
    const tokens = await this.service.login(body);
    return res.status(200).send(tokens);
  }
}
