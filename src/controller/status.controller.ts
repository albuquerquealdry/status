import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { StatusService } from '../service/status.service';
import { CreateStatusDto } from '../dto/create-status.dto';
import { UpdateStatusDto } from '../dto/update-status.dto';
import { response, Response } from 'express'

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}
  @Get()
  findAll(@Res()response: Response) {
    return response.send({message:'Coloque o cep na url'});
  }
  @Get(':id')
  parseCep(@Param('id') id: string, @Res() response: Response) {
    try {
      response.send('Entrega inserida na Planilha')
      this.statusService.parseCep(id);
      return response.send('A entrega foi inserida na planilha')
    } catch (error) {
      response.send(error)
    }
    
}
}