import { Controller, Get, Post, Body, Res, HttpStatus  } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get('sprinklr-demo/token')
  getHello2(@Res({ passthrough: true }) res: Response) {
    console.log('sprinklr/test2');
    res.status(HttpStatus.OK);
    return this.appService.sprinklrToken();
  }

  @Post('sprinklr-demo/save')
  sendNotify( @Res({ passthrough: true }) res: Response, @Body() data) {
    console.log('entra', data);
    res.status(HttpStatus.OK);
    return this.appService.sprinklrReturn(data);
  }
}
