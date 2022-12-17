import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterController } from './register.controller';
import { RegisterEntity } from './register.entity';
import { RegisterService } from './register.service';

@Module({
  imports: [TypeOrmModule.forFeature([RegisterEntity])],
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class RegisterModule {}
