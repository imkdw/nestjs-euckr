import { Controller, Post, Body, RawBodyRequest, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('create/euc-kr')
  createEuckr(@Req() req: RawBodyRequest<Request>) {
    const raw = req.rawBody;
    console.log('EUC-KR 데이터 : ', raw.toString());
  }

  @Post('create/utf-8')
  createUtf8(@Body() body: any) {
    console.log('UTF-8 데이터 : ', body);
  }
}
