import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/guards";

@Controller('publishApartment')
@UseGuards(AuthGuard)
export class PublishApartmentController {
  constructor(){}

  @Get()
  prof() {
    return 'entre aca'
  }
}