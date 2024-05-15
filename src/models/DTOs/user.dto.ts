import {IsString, IsNumber} from 'class-validator'

export class userInfoDTO{

    @IsString()
    id:string;

    @IsString()
    username:string;

    @IsNumber()
    psword: number;
}
