import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

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

}