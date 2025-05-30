import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { RegisterReqDto } from 'src/auth/dtos/registerReq.dto';
import { RegisterResDto } from 'src/auth/dtos/registerRes.dto';

/**
 * Service for managing user operations such as finding users by email and registering new users.
 * Interacts with the database via usersRepository.
 */
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  /**
   * Finds a user by email.
   * @param email The email address of the user to be found.
   * @returns A Promise of User object if a user with the given email is found, else null.
   */
  async findUserByEmail(email: string): Promise<User | null> {
    return await this.usersRepository.findOne({ where: { email } });
  }

  /**
   * Registers a new user by saving their data to the database.
   * The password is hashed before being stored.
   * @param registerReqDto The data transfer object containing registration details (email, password).
   * @returns A Promise of RegisterResDto, which contains the id of the newly created user.
   */
  async registerUser(registerReqDto: RegisterReqDto): Promise<RegisterResDto> {
    const { email, password } = registerReqDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = this.usersRepository.create({
      email,
      password: hashedPassword,
    });

    await this.usersRepository.save(user);

    return { id: user.id };
  }
}
