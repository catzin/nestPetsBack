import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet, ShelterEntity, User, ocupationEntity, shelterRequest } from './shared/entities/index';
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
        ShelterEntity
      ],
      synchronize:true

    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
