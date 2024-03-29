import { IsEmail, IsInt, IsString } from "class-validator";


export class createUserDTO{
    id : string;
    @IsString()
    nombre : string;
    @IsString()
    apPaterno : string;
    @IsString()
    apMaterno : string;
    @IsString()
    @IsEmail()
    email : string;
    @IsString()
    password : string;
    @IsString()
    fechaNacimiento: string;
    @IsString()
    sexo : string;
    @IsInt()
    idOcupation :number;
    @IsString()
    edad : string;





}