import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { RegisterModule } from './register/register.module';

@Module({
  imports: [DatabaseModule, UserModule, RegisterModule],
})
export class AppModule {}
