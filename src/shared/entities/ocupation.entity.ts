import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('Ocupation')
export class ocupationEntity{

    @PrimaryGeneratedColumn({type:'int'})
    idOcupation : number;
    @Column()
    ocupation : string

    @OneToMany(() => User , user => user.ocupacion)
    usuarios :  User[]

}