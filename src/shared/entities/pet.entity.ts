import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pet{
  @PrimaryGeneratedColumn('uuid')
  idPet : string;
  @Column()
  nombre : string;
  @Column({length:1})
  sexo : string;
}