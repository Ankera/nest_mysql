import { Controller, Get, Response } from '@nestjs/common';

@Controller('article')
export class ArticleController {

    @Get()
    index(@Response() res){
        res.cookie("username", "I COOKIE", {
            maxAge: 1000*60*100,
            httpOnly: true,
            signed: true
        })
        res.send("我是一个文章页面")
        // return "我是一个文章页面"
    }
}
