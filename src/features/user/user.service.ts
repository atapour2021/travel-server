import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'src/database/repository/base.repository';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { Like, Between } from 'typeorm';
import { UpdateUserAgeDto, UserFilterDto } from './dto/user.dto';

@Injectable()
export class UserService extends BaseRepository<UserEntity> {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {
    super(userRepository);
  }

  async findByFilter(data: UserFilterDto): Promise<UserEntity[]> {
    const name = data.name ? data.name : '';
    const family = data.family ? data.family : '';
    const to = data.to ? data.to : new Date();
    const from = data.from ? data.from : this.getPreviousYear(new Date());

    const query = {
      name: Like(`%${name}%`),
      family: Like(`%${family}%`),
      CreatedDate: Between(from, to),
    };

    return await this.userRepository.find({
      where: query,
    });
  }

  getPreviousYear = (date: Date) => {
    const clone = new Date(date.getTime());
    clone.setMonth(date.getMonth() - 12);
    return clone;
  };

  async updateUserAge(id: number, data: UpdateUserAgeDto): Promise<UserEntity> {
    const user: UserEntity = await this.userRepository.findOne({
      where: { id: id },
    });
    if (!user) {
      throw new HttpException(
        {
          message: 'user not found',
        },
        HttpStatus.NOT_FOUND,
      );
    } else {
      try {
        user.UpdatedDate = new Date();
        user.age = data.age;
        return await this.userRepository.save(user);
      } catch (error) {
        throw new HttpException(
          {
            message: error,
          },
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  }
}
