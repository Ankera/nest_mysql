import { Module } from '@nestjs/common';
import { UserController } from './controller/user/user.controller';
import { UserService } from './service/user/user.service';
import { NewsController } from './controller/news/news.controller';
import { NewsService } from './service/news/news.service';

@Module({
  controllers: [UserController, NewsController],
  providers: [UserService, NewsService]
})
export class AdminModule {}
