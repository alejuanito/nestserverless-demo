import { Injectable } from '@nestjs/common';
import { SprinklrRequestDto } from './dto/sprinklr-request.dto';
import { SprinklrResponseDto } from './dto/sprinklr-response.dto';
const { uuid } = require('uuidv4');

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHello2(): string {
    return 'HoLA MUNDO!';
  }

  sprinklrReturn(request : SprinklrRequestDto): SprinklrResponseDto {
    console.log('request', request);
    let response: SprinklrResponseDto = new SprinklrResponseDto();
    response.batchName = request.batchName;
    response.taskId = uuid();
    return response;
  }
}
