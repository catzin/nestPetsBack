import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminUser, Pet, ShelterEntity, User, ocupationEntity, shelterRequest , Quality} from './shared/entities/index';
import { AuthModule } from './modules/auth/auth.module';


@Module({
  imports: [
    AuthModule,
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

    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
