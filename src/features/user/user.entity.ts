import { IsString } from 'class-validator';
import { BaseModel } from 'src/database/model/base.model';
import { Column, Entity } from 'typeorm';

@Entity()
export class UserEntity extends BaseModel {
  @Column({ type: String })
  name: string;

  @Column({ type: String })
  family: string;

  @Column({ type: Number })
  age: number;
}
