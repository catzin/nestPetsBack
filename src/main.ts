import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();


/**
 src/
|-- app.module.ts
|-- main.ts
|-- shared/
|   |-- index.ts
|   |-- entities/
|   |-- dto/
|   |-- interfaces/
|   |-- constants/
|   |-- exceptions/
|   |-- guards/
|   |-- middlewares/
|   |-- pipes/
|-- modules/
|   |-- users/
|   |   |-- users.module.ts
|   |   |-- users.controller.ts
|   |   |-- users.service.ts
|   |-- another-module/
|   |   |-- another-module.module.ts
|   |   |-- another-module.controller.ts
|   |   |-- another-module.service.ts

 */