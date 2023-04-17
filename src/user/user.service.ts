import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model/user.model';
import { Model } from 'mongoose';
import axios from 'axios';
import { HttpService } from '@nestjs/axios';
import * as bcrypt from 'bcrypt'
//import { MailerService } from '@nestjs-modules/mailer'
//import{ RabbitMQService } from 'amqplib'

@Injectable()
export class UserService {
  constructor(
    //private readonly mailerService: MailerService,
    private readonly httpService: HttpService,
    //private readonly rabbitMQService: RabbitMQService,
    @InjectModel('User') private readonly userModel: Model<User>,
  ) {}

  async create(doc: User) {
    const result = await new this.userModel(doc).save();
    //await this.mailerService.sendWelcomeEmail(result);
    //await this.rabbitMQService.publish('user.created', { userId: result.id });
    return result
  }

  async findById(userId: number): Promise<any> {
    const response = await axios.get(`https://reqres.in/api/users/${userId}`);
    return response.data;
  }

  async getAvatar(userId: number): Promise<any> {
    const response = await axios.get(`https://reqres.in/api/users/${userId}`);
    const avatarURL = response.data.data.avatar;
    const hashedAvatarURL = await bcrypt.hash(avatarURL, 2);
    const userJSON = JSON.stringify(avatarURL);
    const buffer = Buffer.from(userJSON, 'utf-8');
    const base64Encoded = buffer.toString('base64');
    const user = await this.userModel.findOneAndUpdate(
      { id: userId },
      { avatar: hashedAvatarURL },
      { new: true, upsert: true },
    );

    return base64Encoded;
  }

  async removeAvatar(userId: number): Promise<any> {
    const user = await this.userModel.findOneAndUpdate(
      { id: userId },
      { $unset: { avatar: '' } },
      { new: true },
    );
  }
}
