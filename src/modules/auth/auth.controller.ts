import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { LoginDTO, createUserDTO } from 'src/shared/dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('login')
    async login(@Body() credentials: LoginDTO) {

        try {
            const user = await this.authService.login(credentials);
            return {
                ok: true,
                token: user,
                message: 'OK'
            }

        } catch (error) {
            const { status, message } = error;
            return { ok: false, status, message };
        }
    }

    @Post('create')
    async newUser(@Body() data: createUserDTO) {

        try {
            const user = await this.authService.createUser(data);
            return {
                status: HttpStatus.OK,
                message: 'Usuario creado exitosamente',
                token: user,

            }

        } catch (error) {
            const { status, message } = error;
            return {
                ok: false,
                status,
                message
            }
        }
    }

    @Post('validateToken')
    async validateToken(@Body('token') token : string){
        try {
           const res = await this.authService.validateToken(token);
           return res;
            
        } catch (error) {
            const {name,message} = error;
           
            return {
                ok:false,
                name,
                message
            };
        }
    }
}
