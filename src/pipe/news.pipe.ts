import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class NewsPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // 拦截器
    console.log("pipe", value) // get post 
    value._age = 12;
    return value;
  }
}
