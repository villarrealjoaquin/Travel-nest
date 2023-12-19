import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { CreateUserDto, UpdateUserDto } from "../dto/user.dto";
import { User, UserDocument } from "../schema/user.schema";
import { Model } from "mongoose";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

  async findOne(user: string) {
    return this.userModel.findOne({ email: user });
  }

  async createUser(user: CreateUserDto) {
    return this.userModel.create(user);
  }

  async findAll() {
    return this.userModel.find();
  }

  async findById(id: string) {
    return this.userModel.findById(id);
  }

  async deleteUser(id: string) {
    return this.userModel.findByIdAndDelete(id).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<UserDocument> {
    return this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
  }
}