import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  // const app = await NestFactory.createMicroservice(AppModule, {
  //   transport: Transport.TCP,
  // });
  // app.listen(() => console.log('Microservice is listening'));

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
