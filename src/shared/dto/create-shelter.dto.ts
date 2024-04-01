import { IsOptional, IsString } from "class-validator";
import { CreateDateColumn } from "typeorm";

export class createShleterDTO{
    idShelter : string;
    @IsString()
    shelter : string;
    @CreateDateColumn()
    fechaCreacion : Date;
    @IsString()
    usuarioId: string;

    @IsString()
    @IsOptional()
    faceLink: string;
    @IsString()
    @IsOptional()
    instaLink: string;
    @IsString()
    @IsOptional()
    webLink: string;



}