import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import helmet from 'helmet';
import { AppModule } from './app.module';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(helmet());
  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(compression());
  app.use(cookieParser());

  await app.listen(3330);
}
bootstrap();
