import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RegisterEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  fullName: string;

  @Column({ nullable: false })
  phone: string;

  @Column({ nullable: false })
  email: string;

  @Column()
  country: string;
}
