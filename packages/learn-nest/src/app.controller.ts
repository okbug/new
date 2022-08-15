import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { getUrlParams, isEmptyObject } from './utils';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    console.log(appService, 'okbug');
  }

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  //  @Header('content-type', 'text/html; charset=utf-8')
  @Get('/test/:id')
  getTest(@Req() req: Request, @Param('id') id): string {
    const params = getUrlParams(req.url);
    console.log(params);
    if (!isEmptyObject(params)) {
      return `get /test/${id} by id and params: ${JSON.stringify(params)}`;
    }
    return `get /test/${id} by id`;
  }
  @Get('/test')
  getTestNotId(@Req() req: Request) {
    console.log(req);

    return 'get /test by no id';
  }

  /**
   * 301重定向
   */
  @Get('/okbug')
  @Redirect('https://github.com/okbug', 301)
  getGithub() {
    return '';
  }

  @Post('/post')
  async post(@Res() res: Response, @Body() p: { a: string }) {
    res.status(HttpStatus.OK).json(p);
  }
}
