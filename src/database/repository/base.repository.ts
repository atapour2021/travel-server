import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseModel } from '../model/base.model';

@Injectable()
export class BaseRepository<T extends BaseModel> {
  constructor(private readonly repository: Repository<T>) {}

  async findAll(): Promise<T[]> {
    try {
      return await this.repository.find({});
    } catch (error) {
      throw new HttpException(
        {
          message: error,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findById(id: any): Promise<T> {
    try {
      return await this.repository.findOneBy({ id });
    } catch (error) {
      throw new HttpException(
        {
          message: error,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async insert(data: T): Promise<T> {
    try {
      data.CreatedDate = new Date();
      return await this.repository.save(data);
    } catch (error) {
      throw new HttpException(
        {
          message: error,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async update(id: number, updated_values: T): Promise<T> {
    const updatedData = await this.findById(id);
    Object.keys(updated_values).forEach((key) => {
      updatedData[key] = updated_values[key];
    });

    try {
      updatedData.UpdatedDate = new Date();
      return await this.repository.save(updatedData);
    } catch (error) {
      throw new HttpException(
        {
          message: error,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async delete(id: number): Promise<unknown> {
    try {
      return await this.repository.delete(id);
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
