import { Injectable, NotFoundException } from '@nestjs/common';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { InjectRepository } from '@nestjs/typeorm';
import { createShleterDTO } from 'src/shared/dto';
import { ShelterEntity, User } from 'src/shared/entities';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ShelterService {

    constructor(
        @InjectRepository(User)
        private userRepository : Repository<User>,
        @InjectRepository(ShelterEntity)
        private shelterRepository : Repository<ShelterEntity>
    ){}

    async createShelter(data : createShleterDTO){

        const {usuarioId} = data;

        const user = await this.userRepository.findOne({ where: { id:  usuarioId } });
        if (!user) {
            throw new NotFoundException('El usuario no fue encontrado');
        }
        const id: string = uuidv4();
        try{

            const shelter = this.shelterRepository.create({
                idShelter:id,
                usuario : user,
                ...data
            })

            const newShelter = this.shelterRepository.save(shelter);
            return newShelter;

        }catch(err){
            return err;

        }

      
    }
}
