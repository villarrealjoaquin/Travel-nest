import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
  @Prop({ require: true, unique: true })
  name: string;

  @Prop({ require: true })
  lastname: string;

  @Prop({ require: true, unique: true })
  email: string;

  @Prop({
    required: true,
    validate: {
      validator: (password: string) => password.length >= 5,
      message: 'Password must have at least 5 characters',
    }
  })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);