import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('Ocupation')
export class ocupationEntity{

    @PrimaryGeneratedColumn('uuid')
    idOcupation : string;
    @Column()
    ocupation : string

    @OneToMany(() => User , user => user.ocupacion)
    usuarios :  User[]
  


}