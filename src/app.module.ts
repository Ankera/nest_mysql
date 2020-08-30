import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleController } from './controller/article/article.controller';
import { UserController } from './controller/user/user.controller';
import { NewService } from './service/new/new.service';
import { UploadController } from './controller/upload/upload.controller';
import { ProductController } from './controller/product/product.controller';
import { UserService } from './service/user/user.service';

import { InitMiddleware } from "./middleware/init.middleware";
import { UserMiddleware } from "./middleware/user.middleware";
import { NewsController } from './controller/news/news.controller';
import { AdminModule } from './module/admin/admin.module';
import { ApiModule } from './module/api/api.module';
import { DefaultModule } from './module/default/default.module';

@Module({
  imports: [AdminModule, ApiModule, DefaultModule],
  controllers: [AppController, ArticleController, UserController, UploadController, ProductController, NewsController],
  providers: [AppService, NewService, UserService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      // .apply(InitMiddleware, logger) // 自定义中间价
      .apply(InitMiddleware) 
      // .forRoutes("*")  // 匹配所有路由
      .forRoutes(
        { path: "user", method: RequestMethod.ALL },
        { path: "article", method: RequestMethod.GET }
      )
      .apply(UserMiddleware) // 串联中间价
      .forRoutes("user")


    // .apply(InitMiddleware, UserMiddleware)
    // .forRoutes(
    //   {path: "user", method: RequestMethod.ALL},
    //   {path: "article", method: RequestMethod.GET}
    // )
  }
}