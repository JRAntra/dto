import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDTO , PartialUserDTO} from './user.dto';
import { ValidationError } from 'class-validator';
import { userInfoDTO } from './models/DTOs/user.dto';
import { UsersService } from './users/users/users.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private UserService: UsersService) {}

  @Get('allUsers')
  getHello(): Promise<any> {
    return this.UserService.getAllUsers()
  }

  @Post("newUser")
   async createUserInfo(@Body() body : userInfoDTO): Promise<userInfoDTO> {

    // console.log(body)
    return this.UserService.addNewUser(body)

  }
}
