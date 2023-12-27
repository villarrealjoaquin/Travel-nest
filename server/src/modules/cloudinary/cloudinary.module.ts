import { Module } from '@nestjs/common';
import { CloudinaryService } from './service/cloudinary.service';
import { CloudinaryProvider } from './provider/cloudinary.provider';

@Module({
  providers: [CloudinaryProvider, CloudinaryService],
  exports: [CloudinaryProvider, CloudinaryService]
})
export class CloudinaryModule {}