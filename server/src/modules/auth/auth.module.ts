import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { DatabaseModule } from 'src/database/database.module';
import { UserService } from 'src/modules/user/service/user.service';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import { AuthGuard } from 'src/guards';
import { RefreshTokenGuard } from 'src/guards/refreshToken.guard';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('jwt.secret'),
        signOptions: {
          expiresIn: '1h', 
        },
      }),
    }),
    DatabaseModule,
    UserModule
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, AuthGuard, RefreshTokenGuard],
  exports: [AuthService]
})
export class AuthModule {}
