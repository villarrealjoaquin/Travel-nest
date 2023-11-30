import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "src/auth/schema/user.schema";
import { CreateUserDto } from "../dto/user.dto";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

  async findOne(user: string) {
    return this.userModel.findOne({ email: user });
  }

  async createUser(user: CreateUserDto) {
    return this.userModel.create(user);
  }
}