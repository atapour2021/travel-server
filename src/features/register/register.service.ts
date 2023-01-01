import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'src/database/repository/base.repository';
import { Repository } from 'typeorm';
import { RegisterEntity } from './register.entity';
import { RegisterFilterDto } from './dto/register.dto';
import { Like, Between } from 'typeorm';

@Injectable()
export class RegisterService extends BaseRepository<RegisterEntity> {
  constructor(
    @InjectRepository(RegisterEntity)
    private readonly registerRepository: Repository<RegisterEntity>,
  ) {
    super(registerRepository);
  }

  async findByFilter(data: RegisterFilterDto): Promise<RegisterEntity[]> {
    const fullName = data.fullName ? data.fullName : '';
    const phone = data.phone ? data.phone : '';
    const email = data.email ? data.email : '';
    const to = data.to ? data.to : new Date();
    const from = data.from ? data.from : this.getPreviousYear(new Date());
    const isChecked = data.isChecked !== undefined ? data.isChecked : null;
    console.log(data)

    const query = {
      fullName: Like(`%${fullName}%`),
      phone: Like(`%${phone}%`),
      email: Like(`%${email}%`),
      CreatedDate: Between(from, to),
      isChecked: isChecked
    };

    return await this.registerRepository.find({
      where: query,
    });
  }

  getPreviousYear = (date: Date) => {
    const clone = new Date(date.getTime());
    clone.setMonth(date.getMonth() - 12);
    return clone;
  };
}
