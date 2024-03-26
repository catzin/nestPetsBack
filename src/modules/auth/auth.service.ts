import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginDTO, createUserDTO } from 'src/shared/dto';
import { User } from 'src/shared/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private jwtService: JwtService
    ) { }

    async login(credentials: LoginDTO): Promise<string> {
        const { email, password } = credentials;
        const user: User = await this.userRepository.findOne({
            where: { email }
        })
        if (!user) {
            throw new ConflictException('Usuario no registrado');
        }
        const passComapare: string = await bcrypt.compare(password, user.password);

        if (!passComapare) {
            throw new UnauthorizedException('Usuario o contraseña incorrectos');
        }

        const payload = { sub: user.email, username: user.id };
        const token =  await this.jwtService.signAsync(payload);
        return token;

    }

    async createUser(data: createUserDTO):Promise<string> {
        const { password, email} = data;

        const selectEmail = await this.userRepository.findOne({
            where: { email }
        })
        if (selectEmail) {
            throw new ConflictException('El email ya está registrado');
        }
        const id: string = uuidv4();
        const hashPassword: string = await bcrypt.hash(password, 10);
        const payload = { sub: email, username: id };

        const user = this.userRepository.create({
            id,
            refugio: false,
            ...data,
            password: hashPassword,
        
        })

        const newUser = this.userRepository.save( user );
        const token : string =  await this.jwtService.signAsync(payload);

        return token;
    }

    async validateToken(token: string) {

        try {

            const valid = this.jwtService.verify(token);
            return valid;

        } catch (err) {
            throw new UnauthorizedException('Token inválido');
        }

    }
}
