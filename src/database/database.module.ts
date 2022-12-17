import { Module } from '@nestjs/common';
// import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
// import { ENV_CONSTANTS } from '../env.constants';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      // imports: [ConfigModule.forRoot()],
      // configService: ConfigService

      useFactory: (): TypeOrmModuleOptions => {
        return {
          type: 'mssql',
          host: 'localhost',
          username: 'sa',
          password: '123456',
          database: 'travel',
          port: 1433,
          synchronize: true,
          entities: ['dist/**/*.entity{.ts,.js}'],
          options: {
            encrypt: true,
            enableArithAbort: true,
          },
          extra: {
            trustServerCertificate: true,
          },
        };
      },
      // inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}

// type: 'mssql',
// host: configService.get<string>(ENV_CONSTANTS.TYPEORM_HOST),
// username: configService.get<string>(ENV_CONSTANTS.TYPEORM_USERNAME),
// password: configService.get<string>(ENV_CONSTANTS.TYPEORM_PASSWORD),
// database: configService.get<string>(ENV_CONSTANTS.TYPEORM_DATABASE),
// port: Number(configService.get<string>(ENV_CONSTANTS.TYPEORM_PORT)),
// entities: [configService.get<string>(ENV_CONSTANTS.TYPEORM_ENTITIES)],
// synchronize: true,
// options: { enableArithAbort: true, encrypt: true },
// extra: {
//   trustServerCertificate: true,
// },
