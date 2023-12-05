import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { DatabaseModule } from 'src/database/database.module';
import { UserService } from 'src/user/service/user.service';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('jwt.secret'),
        signOptions: { expiresIn: '60s' }
      })
    }),
    // JwtModule.register({secret: process.env.JWT_SECRET}),
    DatabaseModule,
    UserModule
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, JwtService],
  exports: [AuthService]
})
export class AuthModule {}
