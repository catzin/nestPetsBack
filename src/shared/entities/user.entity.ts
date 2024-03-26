import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{

    @PrimaryGeneratedColumn('uuid')
    id : string;

    @Column({length : 30})
    nombre : string;
    @Column({length : 30})
    apPaterno : string;
    @Column({length : 30})
    apMaterno : string;
    @Column({length : 100})
    email : string;
    @Column({length:128})
    password : string;
    @Column()
    refugio : boolean

    
}