import { Module } from '@nestjs/common';
import { ShelterService } from './shelter.service';
import { ShelterController } from './shelter.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShelterEntity, User } from 'src/shared/entities';

@Module({
  providers: [ShelterService],
  controllers: [ShelterController],
  imports:[
    TypeOrmModule.forFeature([
      User,
      ShelterEntity
    ])
  ]
})
export class ShelterModule {}
