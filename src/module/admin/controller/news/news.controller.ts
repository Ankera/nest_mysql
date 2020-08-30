import { Controller, Get } from '@nestjs/common';
import { NewsService } from "../../service/news/news.service";

@Controller('admin/news')
export class NewsController {
    constructor(private newsService: NewsService){

    }

    @Get()
    index(){
        return this.newsService.getNews()
    }
}