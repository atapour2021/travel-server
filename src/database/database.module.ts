import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ENV_CONSTANTS } from '../env.constants';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (): TypeOrmModuleOptions => {
        return {
          type: 'mssql',
          host: ENV_CONSTANTS.TYPEORM_HOST,
          username: ENV_CONSTANTS.TYPEORM_USERNAME,
          password: ENV_CONSTANTS.TYPEORM_PASSWORD,
          database: ENV_CONSTANTS.TYPEORM_DATABASE,
          port: ENV_CONSTANTS.TYPEORM_PORT,
          synchronize: true,
          entities: [ENV_CONSTANTS.TYPEORM_ENTITIES],
          options: {
            encrypt: ENV_CONSTANTS.TYPEORM_ENCRYPT,
            enableArithAbort: ENV_CONSTANTS.TYPEORM_ENABLEARITHABORT,
          },
          extra: {
            trustServerCertificate:
              ENV_CONSTANTS.TYPEORM_TRUSTSERVERCERTIFICATE,
          },
        };
      },
    }),
  ],
})
export class DatabaseModule {}
