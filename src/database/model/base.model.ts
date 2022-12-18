import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  CreatedDate?: Date;

  @Column({ nullable: true })
  UpdatedDate?: Date;
}
