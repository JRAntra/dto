import { Body, Controller, Get, Post } from '@nestjs/common';
import { userInfoDTO } from 'src/models/DTOs/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userServiceL : UsersService){}

    @Post()
    createNewUser(@Body() body : userInfoDTO) {

        ///


        return "";

    }

    @Get()
    getAllUser() {

    }

}
