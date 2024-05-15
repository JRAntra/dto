import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersService } from './users/users/users.service';
import { userInfoSchema, userInfo } from './models/entity/user.entity';
let Pi_Constant = 3.1415926

@Module({
  imports: [

    ConfigModule.forRoot({
      isGlobal: true
    }),

    MongooseModule.forRootAsync(
      {
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
          uri: configService.get('Mongodb_PATH')
        }),
        inject: [ConfigService]
      }
    ),
    MongooseModule.forFeature(
      [
        {name: userInfo.name, schema:userInfoSchema}
      ]
    )
  ],
  controllers: [AppController],
  providers: [
    AppService,
    UsersService
  ],
})
export class AppModule { }

// dto model schema
