import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { MongooseModule } from '@nestjs/mongoose';
import Config from './config';

@Module({
  imports: [UsersModule, CommentsModule, MongooseModule.forRoot("mongodb+srv://yanji:123456!@cluster0.sy5vbal.mongodb.net/threads?retryWrites=true&w=majority&appName=Cluster0")],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }