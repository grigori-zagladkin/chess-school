import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StatisticsService } from './statistics.service';

@ApiTags('statistics')
@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @Get('/new-users')
  async getStatAboutNewUser() {}

  @Get('/new-students')
  async getStatAboutNewStudents() {}

  @Get('/teacher-traffic')
  async getStatAboutTeacherTraffic() {}
}
