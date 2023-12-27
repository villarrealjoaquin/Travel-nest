import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
