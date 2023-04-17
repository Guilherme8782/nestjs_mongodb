import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose/dist';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(
      'mongodb+srv://db_user:0000@cluster0.og2ldlm.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
