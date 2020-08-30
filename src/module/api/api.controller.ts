import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class ApiController {
    @Get()
    index(){
        return "this is api"
    }

    @Get("list")
    apiList(){
        return {
            name: "Tom",
            age: 12
        }
    }
}
