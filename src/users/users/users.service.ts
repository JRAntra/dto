import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userInfoDTO } from 'src/models/DTOs/user.dto';
import { userInfo } from 'src/models/entity/user.entity';
@Injectable()
export class UsersService {

    constructor(@InjectModel(userInfo.name) private userInfoModel: Model<userInfo>){

    }

    async addNewUser(userInfo: userInfoDTO){
        // connect with database
        // console.log(userInfo)
        return await this.userInfoModel.create(userInfo)
    }

    getAllUsers(): Promise<any>{
        return this.userInfoModel.find().exec() 
    }

}
