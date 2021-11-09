import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { StatusService } from '../service/status.service';
import { CreateStatusDto } from '../dto/create-status.dto';
import { UpdateStatusDto } from '../dto/update-status.dto';


@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Post()
  create(@Body() createStatusDto: CreateStatusDto) {
    return this.statusService.create(createStatusDto);
  }

  @Get()
  async findAll() {
    return this.statusService.findAll();
  }

  @Get(':id')
  parseCep(@Param('id') id: string) {
    return this.statusService.parseCep(id);
}




}
