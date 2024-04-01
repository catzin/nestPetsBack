import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Quality {
    @PrimaryGeneratedColumn({type:'int'})
    idQuality : number;
    @Column({length:40})
    quality : string;
}