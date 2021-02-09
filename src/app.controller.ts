import { Controller, Get, Post, Body, Res, HttpStatus  } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { SprinklrRequestDto } from './dto/sprinklr-request.dto';
import { SprinklrResponseDto } from './dto/sprinklr-response.dto';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello/en')
  getHello(): string {
    console.log('sprinklr/test1');
    return this.appService.getHello();
  }

  @Get('hello/fr')
  getHello2(): string {
    console.log('sprinklr/test2');
    return this.appService.getHello2();
  }

  @Post('hello/save')
  sendNotify( @Res({ passthrough: true }) res: Response, @Body() data) {
    console.log('entra', data);
    res.status(HttpStatus.OK);
    return this.appService.sprinklrReturn(data);
  }
}
