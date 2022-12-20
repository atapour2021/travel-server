import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'src/database/repository/base.repository';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { Like } from 'typeorm';

@Injectable()
export class UserService extends BaseRepository<UserEntity> {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {
    super(userRepository);
  }

  async findByFilter(data: { name: string }): Promise<UserEntity[]> {
    let query = { name: null };
    if (data.name) query = { name: Like(`%${data.name}%`) };

    return await this.userRepository.find({
      where: query,
    });
  }
}
