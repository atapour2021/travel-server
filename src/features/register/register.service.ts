import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'src/database/repository/base.repository';
import { Repository } from 'typeorm';
import { Register } from './register.entity';

@Injectable()
export class RegisterService extends BaseRepository<Register> {
  constructor(
    @InjectRepository(Register)
    private readonly registerRepository: Repository<Register>,
  ) {
    super(registerRepository);
  }
}
