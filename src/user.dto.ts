import { PartialType } from "@nestjs/swagger";
import {IsNumber, IsString, Min, Max, MinLength, MaxLength, IsArray, IsOptional} from "class-validator"
export class UserDTO {
    // @IsOptional()
    @IsString() id: string;

    @MinLength(3)
    @MaxLength(8)
    @IsString() username: string 

    @IsNumber()
    @Min(12)
    @Max(100)
    age : number;

    @IsString({each:true})
    likeList: string[];
}

export class PartialUserDTO extends PartialType(UserDTO){}
