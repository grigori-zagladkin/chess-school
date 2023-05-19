import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ClassesDto } from './classes.dto';
import { ClassesService } from './classes.service';

@ApiTags('classes')
@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @HttpCode(200)
  @ApiOperation({ summary: 'Создание занятия' })
  @ApiResponse({ status: 200 })
  @ApiBearerAuth()
  @Auth(['ADMIN', 'TEACHER'])
  @Post()
  async createClass() {}

  @HttpCode(200)
  @ApiOperation({ summary: 'Получения занятия по id' })
  @ApiResponse({ status: 200 })
  @ApiBearerAuth()
  @Get(':id')
  async getClassById(@Param('id') id: string) {}

  @HttpCode(200)
  @ApiOperation({ summary: 'Обновление занятия' })
  @ApiResponse({ status: 200 })
  @ApiBearerAuth()
  @Auth(['ADMIN', 'TEACHER'])
  @Patch(':id')
  async updateClass(@Param('id') id: string, @Body() dto: ClassesDto) {}

  @HttpCode(200)
  @ApiOperation({ summary: 'Удаление занятия' })
  @ApiResponse({ status: 200 })
  @ApiBearerAuth()
  @Auth(['ADMIN', 'TEACHER'])
  @Delete(':id')
  async deleteClass(@Param('id') id: string) {}
}
