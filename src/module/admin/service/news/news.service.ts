import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
    getNews(){
        return [
            {
                title: "news1111",
            },
            {
                title: "news222222",
            }
        ]
    }
}
