import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class shelterRequest{
    @PrimaryGeneratedColumn('uuid')
    idShelterRequest : string;

    @CreateDateColumn()
    fechaSolicitud : Date;
    @Column()
    motivos : string;
    @Column()
    urlFace : string;
    @Column()
    urlInsta : string;
    @Column()
    aceptada : boolean;

    @OneToOne(()=> User, user => user.peticion,{cascade : true})
    @JoinColumn({name: 'idPeticion', referencedColumnName : 'id'})
    user : User;




}