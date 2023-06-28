import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import * as bodyParser from 'body-parser';

@Injectable()
export class RawBodyMiddleware implements NestMiddleware {
  public constructor() {}

  public use(req: Request, res: Response<any>, next: () => any): any {
    bodyParser.raw({ type: '*/*' })(req as any, res as any, next);
  }
}
