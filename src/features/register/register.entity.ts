import { BaseEntity } from 'src/database/model/base.model';
import { Column, Entity } from 'typeorm';

@Entity()
export class Register extends BaseEntity {
  @Column({ nullable: false })
  fullName: string;

  @Column({ nullable: false, unique: true })
  phone: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column()
  country: string;
}
