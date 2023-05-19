import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  const configService = app.get(ConfigService);
  app.use(cookieParser());

  app.useLogger(app.get(Logger));
  app.useGlobalInterceptors(new LoggerErrorInterceptor());

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  const PORT = process.env.PORT || 1500;

  await app.listen(PORT, () => console.log(`Port - ${PORT}`));
}
bootstrap();
