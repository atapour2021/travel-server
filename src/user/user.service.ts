import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    try {
      return await this.userRepository.find({});
    } catch (error) {
      throw new HttpException(
        {
          message: `could not get users: ${error}`,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findById(id: number): Promise<UserEntity> {
    try {
      return await this.userRepository.findOneById(id);
    } catch (error) {
      throw new HttpException(
        {
          message: `could not find user: ${error}`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async insert(user: CreateUserDto): Promise<UserEntity> {
    const newUser = new UserEntity();
    Object.keys(user).forEach((key) => {
      newUser[key] = user[key];
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

  async update(id: number, updated_values: UpdateUserDto): Promise<UserEntity> {
    const updatedUser = await this.findById(id);
    Object.keys(updated_values).forEach((key) => {
      updatedUser[key] = updated_values[key];
    });

    try {
      return await this.userRepository.save(updatedUser);
    } catch (error) {
      throw new HttpException(
        {
          message: `could not update user: ${error}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async delete(id: number): Promise<unknown> {
    try {
      return await this.userRepository.delete(id);
    } catch (error) {
      throw new HttpException(
        {
          message: `could not delete user: ${error}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
