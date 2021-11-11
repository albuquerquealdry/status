import { Module } from '@nestjs/common';
import { StatusController } from './controller/status.controller'
import { StatusService } from './service/status.service';
import { StatusRepository } from './repository/status.repository';


@Module({
  imports: [StatusRepository],
  controllers: [StatusController],
  providers: [
    StatusService,
    StatusRepository
  ],
})
export class AppModule {}
