import {
  Controller,
  Delete,
  HttpCode,
  Param,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';
import FileResponse from './file.response';
import { FilesService } from './files.service';

@ApiBearerAuth()
@ApiTags('files')
@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @ApiOperation({ summary: 'create file' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiResponse({ status: 201, type: FileResponse })
  @HttpCode(201)
  @Auth(['ADMIN', 'STUDENT', 'TEACHER', 'USER'])
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async createFile(
    @UploadedFile() file: Express.Multer.File,
    @Query('folder') folder: string,
  ) {
    return await this.filesService.createFile([file], folder);
  }

  @ApiOperation({ summary: 'delete file by file name' })
  @ApiResponse({ status: 200 })
  @HttpCode(200)
  @Auth(['ADMIN', 'STUDENT', 'TEACHER', 'USER'])
  @Delete('/:fileName')
  async deleteFile(
    @Param('fileName') fileName: string,
    @Query('folder') folder: string,
  ) {
    return await this.filesService.deleteFile(fileName, folder);
  }
}
