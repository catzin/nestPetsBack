import { IsEmail, IsString } from "class-validator";


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
    refugio : boolean;



}