import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Quality } from "./quality.entity";

@Entity()
export class Pet{
  @PrimaryGeneratedColumn('uuid')
  idPet : string;
  @Column()
  nombre : string;
  @Column({length:1})
  sexo : string;
  @ManyToMany(() => Quality)
  @JoinTable({name:'petQualities'})
  qualities : Quality[]

}