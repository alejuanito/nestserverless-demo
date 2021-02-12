import { Injectable } from '@nestjs/common';
import { SprinklrRequestDto } from './dto/sprinklr-request.dto';
import { SprinklrResponseDto } from './dto/sprinklr-response.dto';
import { SprinklrTokenResponseDto } from './dto/sprinklr-token-response.dto';
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

  sprinklrToken(): SprinklrTokenResponseDto {
    let response: SprinklrTokenResponseDto = new SprinklrTokenResponseDto();
    response.token = "xPwAj1P+UHJxSL5NxT+OPkJhaD7KVnOsSfNsiE10AUIzYjllZTRjNzU4ZWM3YjA3YzA4NTcyMmM1NGI4MGMzZg==";
    response.client = "BCM";
    return response;
  }
}
