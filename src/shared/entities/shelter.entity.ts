import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('Shelter')
export class ShelterEntity{

    @PrimaryGeneratedColumn('uuid')
    idShelter : string;
    @Column({length:30})
    shelter : string;
    @CreateDateColumn()
    fechaCreacion : Date;
    @Column()
    faceLink : string;
    @Column()
    instaLink : string;
    @Column()
    webLink : string;
    @OneToOne(()=> User)
    @JoinColumn()
    usuario : User;

}