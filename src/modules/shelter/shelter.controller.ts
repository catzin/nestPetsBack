import { Body, Controller,Post } from '@nestjs/common';
import { ShelterService } from './shelter.service';
import { createShleterDTO } from 'src/shared/dto';


@Controller('shelter')
export class ShelterController {
    constructor(private shelterService : ShelterService){}

    @Post('create')
    async createShelter(@Body() data : createShleterDTO){
        try{

            await this.shelterService.createShelter(data)

        }catch(err){

        }
        return 'create works'
    }

}
