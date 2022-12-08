import { Body, Controller, Post } from "routing-controllers";

@Controller("auth")
export class AuthController {
  
  @Post("/sign-up")
  async registration() {
    
  }

  @Post("/sign-in")
  async login(@Body() dto: any) {
    return dto;
  }

}
