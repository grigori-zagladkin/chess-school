import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { PromoService } from './promo.service';
import { ApiTags } from '@nestjs/swagger';
import PromoDto from './promo.dto';

@ApiTags('promo')
@Controller('promo')
export class PromoController {
  constructor(private readonly promoService: PromoService) {}

  @Get('')
  async getAllPromos(@Query('searchTerm') searchTerm: string) {
    return await this.promoService.getAllPromos(searchTerm);
  }

  @Get('/:id')
  async getPromoById(@Param('id') id: string) {
    return await this.promoService.getPromoById(+id);
  }

  @Post()
  async createPromo() {
    return await this.promoService.createPromo();
  }

  @Put(':id')
  async updatePromo(@Param('id') id: string, @Body() dto: PromoDto) {
    return await this.promoService.updatePromo(+id, dto);
  }

  @Delete(':id')
  async deletePromo(@Param('id') id: string) {
    return await this.promoService.deletePromo(+id);
  }
}
