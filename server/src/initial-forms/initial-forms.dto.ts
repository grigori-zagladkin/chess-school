import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsPhoneNumber, IsString } from 'class-validator';

enum ClassesType {
  INDIVIDUAL = 'INDIVIDUAL',
  MINI_GROUP = 'MINI_GROUP',
  GROUP = 'GROUP',
}

export default class InitialFormDto {
  @ApiProperty({ example: 'Ilya', description: 'Имя' })
  @IsString({ message: 'Имя должно быть строкой' })
  name: string;

  @ApiProperty({ example: 'Ivanov', description: 'Фамилия' })
  @IsString({ message: 'Фамилия должна быть строкой' })
  surname: string;

  @ApiProperty({ example: 14, description: 'Возраст' })
  @IsString({ message: 'Возраст должен быть числом' })
  age: number;

  @ApiProperty({
    example: 'Занимался там то там то ...',
    description: 'Доп. информация',
  })
  @IsString({ message: 'Информация должна быть строкой' })
  description: string;

  @ApiProperty({
    example: 'Занимался там то там то ...',
    description: 'Доп. информация',
  })
  @IsString({ message: 'Номер телефона должен быть строкой' })
  @IsPhoneNumber('RU', { message: 'Не валидный номер телефона' })
  phoneNumber: string;

  @ApiProperty({ example: ClassesType.GROUP, description: 'Тип занятия' })
  @IsEnum(ClassesType)
  classesType: ClassesType;
}
