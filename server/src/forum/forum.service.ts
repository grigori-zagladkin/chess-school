import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ForumCategoryDto, ForumTopicDto } from './forum.dto';

@Injectable()
export class ForumService {
  constructor(private readonly prismaService: PrismaService) {}

  async createForumCategory() {
    return await this.prismaService.forumCategory
      .create({
        data: {
          title: '',
          slug: '',
        },
      })
      .then((data) => data.id);
  }

  async getAllForumCategories() {
    return await this.prismaService.forumCategory.findMany();
  }

  async getForumCategoryById(id: number) {
    return await this.prismaService.forumCategory.findUniqueOrThrow({
      where: { id },
    });
  }

  async updateForumCategory(id: number, dto: ForumCategoryDto) {
    return await this.prismaService.forumCategory.update({
      where: {
        id,
      },
      data: {
        ...dto,
      },
    });
  }

  async deleteForumCategory(id: number) {
    await this.prismaService.topic.updateMany({
      where: {
        forumCategoryId: id,
      },
      data: {
        forumCategoryId: null,
      },
    });
    return await this.prismaService.forumCategory.delete({
      where: { id },
    });
  }

  async createTopic(authorId: number) {
    return await this.prismaService.topic
      .create({
        data: {
          question: '',
          images: [],
          authorId: authorId,
          viewing: 0,
          answersCount: 0,
          slug: '',
        },
      })
      .then((data) => data.id);
  }

  async getTopicsByCategory(categorySlug: string) {
    return await this.prismaService.topic.findMany({
      where: {
        forumCategory: {
          slug: categorySlug,
        },
      },
    });
  }

  async getTopicBySlug(slug: string) {
    return await this.prismaService.topic.findUniqueOrThrow({
      where: {
        slug,
      },
    });
  }

  async getTopicById(id: number) {
    return await this.prismaService.topic.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }

  async updateTopic(id: number, dto: ForumTopicDto) {
    await this.getTopicById(id);
    return await this.prismaService.topic.update({
      where: { id },
      data: { ...dto },
    });
  }

  async deleteTopic(id: number) {}

  async;
}
