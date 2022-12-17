import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/register.dto';
import { RegisterEntity } from './register.entity';

@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(RegisterEntity)
    private readonly userRepository: Repository<RegisterEntity>,
  ) {}

  async insert(register: CreateUserDto): Promise<RegisterEntity> {
    const newUser = new RegisterEntity();
    Object.keys(register).forEach((key) => {
      newUser[key] = register[key];
    });
    try {
      return await this.userRepository.save(newUser);
    } catch (error) {
      throw new HttpException(
        {
          message: `could not create user: ${error}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
