import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { RegisterModule, UserModule } from './features';

@Module({
  imports: [DatabaseModule, UserModule, RegisterModule],
})
export class AppModule {}
