import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

