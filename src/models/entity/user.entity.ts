import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class userInfo{

    @Prop()
    id: string;

    @Prop()
    username: string;

    @Prop()
    psword:number;
}

export const userInfoSchema = SchemaFactory.createForClass(userInfo)