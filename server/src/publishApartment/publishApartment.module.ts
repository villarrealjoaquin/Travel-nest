import { Module } from "@nestjs/common";
import { PublishApartmentController } from "./controller/publishApartment.controller";
import { PublishApartmentService } from "./service/publishApartment.service";
import { AuthModule } from "src/auth/auth.module";
import { AuthGuard } from "src/guards";
import { JwtService } from "@nestjs/jwt";

@Module({
  imports: [AuthModule],
  controllers: [PublishApartmentController],
  providers: [PublishApartmentService, AuthGuard, JwtService],
  exports: []
})
export class PublishApartmentModule {}