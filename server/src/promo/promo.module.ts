import { Module } from '@nestjs/common';
import { PromoService } from './promo.service';
import { PromoController } from './promo.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PromoController],
  providers: [PromoService, PrismaService],
})
export class PromoModule {}
