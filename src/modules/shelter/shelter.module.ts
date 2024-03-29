import { Module } from '@nestjs/common';
import { ShelterService } from './shelter.service';
import { ShelterController } from './shelter.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/shared/entities';

@Module({
  providers: [ShelterService],
  controllers: [ShelterController],
  imports:[
    TypeOrmModule.forFeature([
      User
    ])
  ]
})
export class ShelterModule {}
