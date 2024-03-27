import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ocupationEntity } from "./ocupation.entity";
import { shelterRequest } from "./shelterRequest.entity";

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
    refugio : boolean;
    @Column({length:12})
    fechaNacimiento : string;
    @Column({length: 1})
    sexo : string;
    @Column()
    edad : string;


    @ManyToOne(() => ocupationEntity, ocupation => ocupation.usuarios)
    @JoinColumn({referencedColumnName:'idOcupation',name:'idOcupation'})
    ocupacion: ocupationEntity;
    @OneToOne(() => shelterRequest , shelter => shelter.user)
    peticion : shelterRequest
 
    
}