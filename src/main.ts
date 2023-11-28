import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Criação de uma aplicação
  const app = await NestFactory.create(AppModule);
  // Essa função serve para o Nest validar as nossas entradas de dados na requisição (body, parameter)
  app.useGlobalPipes(new ValidationPipe());
  // Escuta a porta 3000
  await app.listen(3000);
}
bootstrap();
