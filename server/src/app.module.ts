import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config } from './config/config';
import { DatabaseModule } from './database/database.module';
import { AuthModule, PublishApartmentModule, UserModule } from './modules';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
    DatabaseModule,
    AuthModule,
    UserModule,
    PublishApartmentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
