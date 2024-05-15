import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDTO , PartialUserDTO} from './user.dto';
import { ValidationError } from 'class-validator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("newUser")
  createUserInfo(@Body() body : PartialUserDTO): any {
    return body;
  }
}
