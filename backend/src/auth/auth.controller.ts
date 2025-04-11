import { Body, Controller, Post } from '@nestjs/common';
import { LoginReqDto } from './dtos/loginReq.dto';
import { AuthService } from './auth.service';
import { RegisterReqDto } from './dtos/registerReq.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authservice: AuthService) {}

  @Post('login')
  async login(@Body() loginReqDto: LoginReqDto) {
    return this.authservice.authenticate(loginReqDto);
  }

  @Post('register')
  async register(@Body() registerReqDto: RegisterReqDto) {
    return this.authservice.register(registerReqDto);
  }
}
