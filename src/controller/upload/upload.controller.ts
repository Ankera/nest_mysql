import { Controller, Get, Render, Post, Body, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common';
import { FileInterceptor, FileFieldsInterceptor } from "@nestjs/platform-express"
import { createWriteStream } from "fs";
import { join } from "path"

@Controller('upload')
export class UploadController {

    @Get()
    @Render("default/upload")
    index() {

    }

    @Post("doAdd")
    @UseInterceptors(FileInterceptor('pic'))
    doAdd(@Body() body, @UploadedFile() file) {
        // console.log(body);
        // console.log(file);
        var writeStream = createWriteStream(join(__dirname, "../../public/upload", `${file.originalname}`));
        writeStream.write(file.buffer);
        return {
            code: 0,
            msg: "success"
        }
    }


    @Get("uploadMore")
    @Render("default/upload_more")
    uploadMore() {

    }

    @Post("doMoreAdd")
    @UseInterceptors(FileFieldsInterceptor([
        {
            name: "pic1",
            maxCount: 2
        },
        {
            name: "pic2",
            maxCount: 2
        },
    ]))
    doMoreAdd(@Body() body, @UploadedFiles() files) {
        console.log(files)
        for (const key in files) {
            if (Object.prototype.hasOwnProperty.call(files, key)) {
                if (files[key] && files[key].length > 0) {
                    files[key].forEach(file => {
                        let writeStream = createWriteStream(join(__dirname, "../../public/upload", `${file.originalname}`));
                        writeStream.write(file.buffer);
                    });
                }
            }
        }

        return {
            code: 0,
            msg: "success"
        }
    }
}
