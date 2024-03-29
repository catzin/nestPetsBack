import { IsString } from "class-validator";
import { CreateDateColumn } from "typeorm";

export class createShleterDTO{
    idShelter : string;
    @IsString()
    shelter : string;
    @CreateDateColumn()
    fechaCreacion : Date;
    @IsString()
    usuarioId: string;

    faceLink: string;
    instaLink: string;
    webLink: string;



}