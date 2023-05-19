import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ForumCategoryDto {
  @IsString({ message: 'Название категории должно быть строкой' })
  @ApiProperty({
    example: 'Вопросы про коня',
    description: 'Название категории',
  })
  title: string;
}

export class ForumTopicDto {}

export class TopicAnswerDto {}
