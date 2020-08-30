import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import * as Joi from '@hapi/joi';

@Injectable()
export class UserPipe implements PipeTransform {
  private schema;
  constructor(schema: Joi.ObjectSchema) {
    this.schema = schema;
  }

  transform(value: any, metadata: ArgumentMetadata) {
    // const { error } = Joi.Validation(value, this.schema);
    console.log('value', value)
    const { error } = this.schema.validate(value);
    if (error) {
      // throw new BadRequestException('Validation failed');
      return {
        code: -1,
        msg: "fail"
      };
    }
    
    return value;
  }
}
