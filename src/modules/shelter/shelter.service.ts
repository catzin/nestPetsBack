import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createShleterDTO } from 'src/shared/dto';
import { User } from 'src/shared/entities';
import { Repository } from 'typeorm';

@Injectable()
export class ShelterService {

    constructor(
        @InjectRepository(User)
        private userRepository : Repository<User>
    ){}

    async createShelter(data : createShleterDTO){

        const {usuarioId} = data;

        const user = await this.userRepository.findOne({ where: { id:  usuarioId } });
        if (!user) {
            throw new NotFoundException('La ocupación especificada no fue encontrada');
        }




    }
}
