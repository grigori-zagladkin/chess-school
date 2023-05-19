import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';
import InitialFormDto from './initial-forms.dto';
import { InitialFormsService } from './initial-forms.service';

@ApiTags('initial_forms')
@Controller('initial-forms')
export class InitialFormsController {
  constructor(private readonly initialFormsService: InitialFormsService) {}

  @HttpCode(201)
  @ApiOperation({ summary: 'create initial form' })
  @ApiResponse({ status: 201 })
  @UsePipes(new ValidationPipe())
  @Post()
  async createInitialForm(@Body() dto: InitialFormDto) {
    return await this.initialFormsService.createInitialForm(dto);
  }

  @ApiBearerAuth()
  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Получение всех форм' })
  @ApiResponse({ status: 200 })
  @Auth(['ADMIN'])
  async getAllInitialForms(@Query('searchTerm') searchTerm?: string) {
    return await this.initialFormsService.getAllInitialForm();
  }

  @ApiBearerAuth()
  @Auth(['ADMIN'])
  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Получение формы по id' })
  @ApiResponse({ status: 200 })
  async getInitialFormById(@Param('id') id: string) {
    return await this.initialFormsService.getInitialFormById(+id);
  }

  @ApiBearerAuth()
  @HttpCode(200)
  @ApiOperation({ summary: 'Удаление формы' })
  @ApiResponse({ status: 200 })
  @Auth(['ADMIN'])
  @Delete(':id')
  async deleteInitialForm(@Param('id') id: string) {
    return await this.initialFormsService.deleteInitialFrom(+id);
  }
}
