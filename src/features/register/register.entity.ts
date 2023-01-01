import { BaseModel } from 'src/database/model/base.model';
import { Column, Entity } from 'typeorm';

@Entity()
export class RegisterEntity extends BaseModel {
  @Column({ nullable: false })
  fullName: string;

  @Column({ nullable: false })
  phone: string;

  @Column({ nullable: false })
  email: string;

  @Column()
  country: string;

  @Column()
  isChecked: boolean;
}
