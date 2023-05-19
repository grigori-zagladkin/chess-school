import {
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
import { ForumService } from './forum.service';

@ApiTags('forum')
@Controller('forum')
export class ForumController {
  constructor(private readonly forumService: ForumService) {}

  @ApiBearerAuth()
  @HttpCode(201)
  @Auth(['ADMIN'])
  @ApiOperation({ summary: 'create category' })
  @ApiResponse({ status: 201 })
  @Post('category')
  async createForumCategory() {
    return await this.forumService.createForumCategory();
  }

  @ApiBearerAuth()
  @Auth(['ADMIN'])
  @HttpCode(201)
  @ApiOperation({ summary: 'get category by id' })
  @ApiResponse({ status: 201 })
  @Get('category/:id')
  async getForumCategoryById(@Param('id') id: string) {
    return await this.forumService.getForumCategoryById(+id);
  }

  @HttpCode(201)
  @ApiOperation({})
  @ApiResponse({})
  @Get('category')
  async getAllForumCategories() {}

  @Patch('category/:id')
  async updateForumCategory(@Param('id') id: string) {}

  @Delete('category/:id')
  async deleteForumCategory(@Param('id') id: string) {}

  @Post('topic')
  async createTopic() {}

  @Get('topic')
  async getAllTopics() {}

  @Get('category/by-slug/:slug')
  async getForumCategoryBySlug(@Param('slug') slug: string) {}

  @Get('topic/by-slug/:slug')
  async getTopicsBySlug(@Param('slug') slug: string) {}

  @Patch('topic/:id')
  async updateTopic(@Param('id') id: string) {}

  @Delete('topic/:id')
  async deleteTopic(@Param('id') id: string) {}

  @Post('topic_answer')
  async createTopicAnswer() {}

  @Get('topic_answer')
  async getTopicAnswer() {}

  @Get('topic_answer/:id')
  async getTopicAnswerById(@Param('id') id: string) {}

  @Patch('topic_answer/:id')
  async updateTopicAnswer(@Param('id') id: string) {}

  @Delete('topic_answer/:id')
  async deleteTopicAnswer(@Param('id') id: string) {}
}
