import { Controller, Get, Query, Request, Post, Body, UsePipes } from '@nestjs/common';
import { UserPipe } from "../../pipe/user.pipe";
import * as Joi from "@hapi/joi";

let userSchema = Joi.object().keys({
    name: Joi.string().required(),
    age: Joi.number().integer().min(5).max(66).required(),
});

@Controller('user')
@UsePipes(new UserPipe(userSchema))
export class UserController {

    @Get()
    index(@Query() info): string {
        console.log("...info...", info)
        return "这是个人中心....aaaa"
    }

    // Query 获取 get 传值
    @Get("add")
    addData(@Query() query): string {
        console.log(query)
        return query
    }

    @Get("edit")
    addEdit(@Request() req): string {
        // console.log(req)
        return req.query
    }

    @Post("create")
    create(@Body() data): string {
        console.log("body", data);
        return "我是post方法"
    }

    @Get("cookie")
    getCookie(@Request() req){
        // console.log("cookie ---", req.cookies);
        console.log("cookie ---", req.signedCookies, req.session.username);
        return "Cookie  = " + JSON.stringify(req.signedCookies) + " == session = " + req.session.username;
    }
}
