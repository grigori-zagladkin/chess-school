import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InitialFormsController } from './initial-forms.controller';
import { InitialFormsService } from './initial-forms.service';

@Module({
  controllers: [InitialFormsController],
  providers: [InitialFormsService, PrismaService],
})
export class InitialFormsModule {}
