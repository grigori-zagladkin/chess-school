import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ForumController } from './forum.controller';
import { ForumService } from './forum.service';

@Module({
  controllers: [ForumController],
  providers: [ForumService, PrismaService],
})
export class ForumModule {}
