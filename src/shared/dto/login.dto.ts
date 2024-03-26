import { IsEmail, Length } from "class-validator";

export class LoginDTO{

    @IsEmail()
    email : string;

    @Length(8,128)
    password : string;


}