import {
  Injectable,
  InternalServerErrorException,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginReqDto } from './dtos/loginReq.dto';
import { LoginResDto } from './dtos/loginRes.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(private readonly userService: UsersService) {}

  private async validateUser(
    loginDto: LoginReqDto,
  ): Promise<LoginResDto | null> {
    const { email, password } = loginDto;

    const user = await this.userService.findUserByEmail(email);

    if (!user) return null;

    const passwordMatch = await bcrypt.compare(password, user.password);

    return passwordMatch ? { id: user.id, email: user.email } : null;
  }
}
