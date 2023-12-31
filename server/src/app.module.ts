import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { config } from './config/config';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { PublishApartmentModule } from './publishApartment/publishApartment.module';

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
