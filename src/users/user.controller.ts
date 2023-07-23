import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userServie:UserService ) {}

  @Get('user')
  async getHello(): Promise<string> {
    return await this.userServie.getUser();
  }
}
