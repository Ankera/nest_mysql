import { Controller, Get, Render, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Render("default/index")
  getHello(@Request() req): any {
    // return this.appService.getHello();
    req.session.username = "zhangsan_lisi";
    return {
      name: "zhangsan"
    }
  }
}
