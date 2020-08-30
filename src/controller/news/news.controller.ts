import { Controller, Get, Query, UsePipes } from '@nestjs/common';
import { NewsPipe } from "../../pipe/news.pipe";

@Controller('news')
@UsePipes(new NewsPipe())
export class NewsController {
    @Get()
    index(@Query() info){
        console.log(info)
        return "this is news"
    }
}
