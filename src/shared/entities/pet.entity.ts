import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Quality } from './quality.entity';
import { Image } from './image.entity';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn('uuid')
  idPet: string;
  @Column()
  nombre: string;
  @Column({ length: 1 })
  sexo: string;
  @ManyToMany(() => Quality)
  @JoinTable({ name: 'petQualities' })
  qualities: Quality[];

  @OneToMany(() => Image, (image) => image.pet, { eager: true })
  images: Image[];
}
