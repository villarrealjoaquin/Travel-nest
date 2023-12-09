import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173', 
    credentials: true, 
  });
  app.setGlobalPrefix('api');
  app.use(cookieParser());
  const configService = app.get(ConfigService);
  const port = configService.get<number>('port');
  await app.listen(8080);
  console.log(`~ Application is running on: ${await app.getUrl()}`);
}
bootstrap();
