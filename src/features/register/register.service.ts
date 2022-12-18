import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'src/database/repository/base.repository';
import { Repository } from 'typeorm';
import { RegisterEntity } from './register.entity';

@Injectable()
export class RegisterService extends BaseRepository<RegisterEntity> {
  constructor(
    @InjectRepository(RegisterEntity)
    private readonly registerRepository: Repository<RegisterEntity>,
  ) {
    super(registerRepository);
  }
}
