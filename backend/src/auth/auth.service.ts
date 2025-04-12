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
import { BadRequestException } from '@nestjs/common';
import { RegisterReqDto } from './dtos/registerReq.dto';
import { RegisterResDto } from './dtos/registerRes.dto';

/**
 * This service layer is a bridge between auth controller and db, it handles business
 * logic for authentication requests and provides DTO-s for login and register as responses.
 */
@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(private readonly userService: UsersService) {}

  /**
   * Handles the authentication of a user by validating credentials.
   * @param loginDto User login details.
   * @returns Promise<LoginResDto> -> { user id, email }
   * @throws UnauthorizedException in case of wrong credentials.
   * @throws InternalServerErrorException in case of connection issues.
   */
  async authenticate(loginDto: LoginReqDto): Promise<LoginResDto> {
    try {
      const user = await this.validateUser(loginDto);

      if (!user)
        throw new UnauthorizedException('Hibás felhasználónév vagy jelszó!');

      return user;
    } catch (error) {
      if (error instanceof UnauthorizedException) throw error;

      this.logger.error(error);
      throw new InternalServerErrorException('Hiba történt!');
    }
  }

  /**
    Registers a new user after validating their data.
   * @param registerReqDto User registration details.
   * @returns Promise<RegisterResDto> -> { user id, }
   * @throws BadRequestException in case of existing user.
   * @throws InternalServerErrorException in case of connection issues.
   */
  async register(registerReqDto: RegisterReqDto): Promise<RegisterResDto> {
    try {
      const { email } = registerReqDto;

      const user = await this.userService.findUserByEmail(email);

      if (user) throw new BadRequestException('Email már foglalt');

      const newUser = await this.userService.registerUser(registerReqDto);

      return newUser;
    } catch (error) {
      if (error instanceof BadRequestException) throw error;

      this.logger.error(error);
      throw new InternalServerErrorException('Hiba történt!');
    }
  }

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
