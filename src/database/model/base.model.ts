import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class BaseModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  CreatedDate?: Date;

  @Column({ nullable: true })
  UpdatedDate?: Date;
}
