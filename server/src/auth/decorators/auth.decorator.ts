import { UseGuards, applyDecorators } from '@nestjs/common';
import { OnlyAdminGuard } from '../guards/admin.guard';
import { JwtAuthGuard } from '../guards/jwt.guard';

type TypeRole = 'ADMIN' | 'USER' | 'STUDENT' | 'TEACHER' | undefined;

export const Auth = (role: TypeRole[] = ['ADMIN']) =>
  applyDecorators(
    role.includes('ADMIN') || role.includes('TEACHER')
      ? UseGuards(JwtAuthGuard, OnlyAdminGuard)
      : UseGuards(JwtAuthGuard),
  );
