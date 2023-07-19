import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { LoggerModule } from 'nestjs-pino';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { ClassesModule } from './classes/classes.module';
import { ForumModule } from './forum/forum.module';
import { InitialFormsModule } from './initial-forms/initial-forms.module';
import { MessagesModule } from './messages/messages.module';
import { StatisticsModule } from './statistics/statistics.module';
import { UsersModule } from './users/users.module';
import { PromoModule } from './promo/promo.module';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        customProps: (req, res) => ({
          context: 'HTTP',
        }),
        transport: {
          target: 'pino-pretty',
          options: {
            singleLine: true,
          },
        },
      },
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'static'),
    }),
    AuthModule,
    UsersModule,
    InitialFormsModule,
    StatisticsModule,
    MessagesModule,
    ClassesModule,
    ForumModule,
    PromoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
