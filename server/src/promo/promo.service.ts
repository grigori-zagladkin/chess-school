import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import PromoDto from './promo.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class PromoService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllPromos(searchTerm?: string) {
    let filter: Prisma.PromoWhereInput = searchTerm
      ? {
          OR: [
            {
              title: {
                contains: searchTerm,
                mode: 'insensitive',
              },
            },
            {
              content: {
                contains: searchTerm,
                mode: 'insensitive',
              },
            },
          ],
        }
      : {};
    return await this.prismaService.promo.findMany({
      where: filter,
    });
  }

  async getPromoById(id: number) {
    console.log(id);
    return await this.prismaService.promo.findUniqueOrThrow({
      where: { id },
    });
  }

  async createPromo() {
    return await this.prismaService.promo
      .create({
        data: {
          title: '',
          content: '',
        },
      })
      .then((data) => data.id);
  }

  async updatePromo(id: number, dto: PromoDto) {
    await this.getPromoById(id);
    return await this.prismaService.promo.update({
      where: { id },
      data: {
        ...dto,
      },
    });
  }

  async deletePromo(id: number) {
    await this.getPromoById(id);
    return await this.prismaService.promo.delete({
      where: { id },
    });
  }
}
