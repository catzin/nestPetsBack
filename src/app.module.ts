import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminUser, Pet, ShelterEntity, User, ocupationEntity, shelterRequest , Quality} from './shared/entities/index';
import { AuthModule } from './modules/auth/auth.module';
import { ShelterModule } from './modules/shelter/shelter.module';
import { S3Module } from './modules/s3/s3.module';


@Module({
  imports: [
    AuthModule,
    ShelterModule,
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'',
      database:'petDB',
      entities:[
        User,
        ocupationEntity,
        Pet,
        shelterRequest,
        ShelterEntity,
        AdminUser,
        Quality
      ],
      synchronize:true

    }),
    S3Module
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
