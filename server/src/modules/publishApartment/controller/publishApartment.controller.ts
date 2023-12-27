import { Body, Controller, Get, Post, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { AuthGuard } from "src/guards";
import { CloudinaryService } from "src/modules/cloudinary/service/cloudinary.service";
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('publishApartment')
@UseGuards(AuthGuard)
export class PublishApartmentController {
  constructor(private readonly cloudinaryService: CloudinaryService){}

  @Post('upload')
  // @UseInterceptors(FileInterceptor('file'))
  uploadApartment(@UploadedFile() file: Express.Multer.File, @Body() body: any) {
    console.log('entre');
    
    // console.log(file);
    console.log(body, 'form data');
    return this.cloudinaryService.uploadFile(file);
  }
}