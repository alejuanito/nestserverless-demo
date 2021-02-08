import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { SprinklrRequestDto } from './dto/sprinklr-request.dto';
import { SprinklrResponseDto } from './dto/sprinklr-response.dto';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  sendNotify(@Body() body: SprinklrRequestDto): SprinklrResponseDto {
    console.log('body', body);
    return this.appService.sprinklrReturn(body);
  }
}
