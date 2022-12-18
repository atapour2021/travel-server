import { BaseModel } from 'src/database/model/base.model';
import { Column, Entity } from 'typeorm';

@Entity()
export class UserEntity extends BaseModel {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  family: string;

  @Column()
  age: number;
}
