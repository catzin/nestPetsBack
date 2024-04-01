import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Admin')
export class AdminUser{

    @PrimaryGeneratedColumn({type:'int'})
    idAdmin : number;
    @Column({length:30})
    nombre : string;
    @Column({length:30})
    apPaterno : string;
    @Column({length:30})
    apMaterno : string;
    @Column({length:100})
    email : string;

}