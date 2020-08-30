import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";
import * as cookieParser from "cookie-parser";
import * as expressSession from "express-session";
import { logger } from "./middleware/logger.middleware";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, "..", "public"), {
    // prefix: "/static" // 虚拟目录
  }); // 静态资源目录

  app.setBaseViewsDir("views");
  app.setViewEngine("ejs");

  app.use(cookieParser("signedCookies"));

  app.use(expressSession({
    secret: "md5session",
    cookie: {
      maxAge: 60000
    }
  }))

  // 全局中间价
  app.use(logger);

  await app.listen(3000);
}
bootstrap();