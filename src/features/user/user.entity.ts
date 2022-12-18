import { BaseEntity } from 'src/database/model/base.model';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  family: string;

  @Column()
  age: number;
}
