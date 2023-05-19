import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import InitialFormDto from './initial-forms.dto';

@Injectable()
export class InitialFormsService {
  constructor(private readonly prisma: PrismaService) {}

  async createInitialForm(dto: InitialFormDto) {
    return await this.prisma.initialInformation.create({
      data: { isReaded: false, ...dto },
    });
  }

  async getAllInitialForm(searchTerm?: string) {
    const formsFilter: Prisma.InitialInformationWhereInput = searchTerm
      ? {
          OR: [
            {
              name: {
                contains: searchTerm,
                mode: 'insensitive',
              },
            },
            {
              surname: {
                contains: searchTerm,
                mode: 'insensitive',
              },
            },
            {
              description: {
                contains: searchTerm,
                mode: 'insensitive',
              },
            },
            {
              phoneNumber: {
                contains: searchTerm,
                mode: 'insensitive',
              },
            },
          ],
        }
      : {};
    return await this.prisma.initialInformation.findMany({
      where: formsFilter,
      orderBy: [
        {
          isReaded: 'desc',
        },
        {
          createdAt: 'desc',
        },
      ],
    });
  }

  async getInitialFormById(id: number) {
    return await this.prisma.initialInformation.update({
      where: { id },
      data: { isReaded: true },
    });
  }
  async deleteInitialFrom(id: number) {
    return await this.prisma.initialInformation.delete({ where: { id } });
  }
}
