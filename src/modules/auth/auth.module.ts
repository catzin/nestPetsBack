import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, ocupationEntity } from 'src/shared/entities/index';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/shared/constants';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports:[
    TypeOrmModule.forFeature([
      User,
      ocupationEntity
    ]),
    JwtModule.register({
      global:true,
      secret : jwtConstants.secret,
      signOptions:{
        expiresIn : '1h'
      }

    })

  ]
})
export class AuthModule {}
