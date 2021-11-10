import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { StatusService } from '../service/status.service';
import { CreateStatusDto } from '../dto/create-status.dto';
import { UpdateStatusDto } from '../dto/update-status.dto';
import { response, Response } from 'express'

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Post()
  create(@Body() createStatusDto: CreateStatusDto) {
    return this.statusService.create(createStatusDto);
  }

  @Get()
  findAll(@Res()response: Response) {
    return response.send({message:'Coloque o cep na url'});
  }

  @Get(':id')
  parseCep(@Param('id') id: string, @Res() response: Response) {
    response.send('Entrega inserida na Planilha')
    return this.statusService.parseCep(id);
}




}
