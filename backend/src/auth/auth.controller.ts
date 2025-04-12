import { Body, Controller, Post } from '@nestjs/common';
import { LoginReqDto } from './dtos/loginReq.dto';
import { AuthService } from './auth.service';
import { RegisterReqDto } from './dtos/registerReq.dto';

/**
 * This controller layer manages authentication requests
 * and provides endpoints for login and register.
 */
@Controller('auth')
export class AuthController {
  constructor(private readonly authservice: AuthService) {}

  /**
   * @post This method handles login request sent from the client.
   * @param loginReqDto The request body from the client (email, password).
   * @returns A promise that resolves to the login result (JSON object).
   */
  @Post('login')
  async login(@Body() loginReqDto: LoginReqDto) {
    return this.authservice.authenticate(loginReqDto);
  }

  /**
   * @post This method handles register request sent from the client.
   * @param registerReq The request body from the client (email, password).
   * @returns A promise that resolves to the registration result (JSON object).
   */
  @Post('register')
  async register(@Body() registerReqDto: RegisterReqDto) {
    return this.authservice.register(registerReqDto);
  }
}
