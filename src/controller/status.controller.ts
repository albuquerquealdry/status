import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { StatusService } from '../service/status.service';
import { CreateStatusDto } from '../dto/create-status.dto';
import { UpdateStatusDto } from '../dto/update-status.dto';
import { response, Response } from 'express'


@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}
  @Get()
  findAll() {
    return ({message:'Coloque o cep na url'});
  }
  @Get(':id')
  async parseCep(@Param('id') id: string) {
    let message = await this.statusService.parseCep(id)
      return(message)       
        
      }
}

// try {
//   let message = await this.statusService.parseCep(id);
//   //console.log(message)
//  return  (message)
// } catch (error) {
//   //let message = error
//   return (`deu errado \n ${error}`)
// }