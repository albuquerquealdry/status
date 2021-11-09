import { Injectable } from '@nestjs/common';
import { CreateStatusDto } from '../dto/create-status.dto';
import { StatusRepository } from '../repository/status.repository';

const sheet = require('../repository/sheet.repository')
@Injectable()
export class StatusService {

  constructor(private readonly statusRepository : StatusRepository){

  }
  create(createStatusDto: CreateStatusDto) {
    return 'This action adds a new status';
  }
  findAll() {
    return 'Planilha atualizadda'
  }
  async parseCep(id) {

    let test =await this.statusRepository.cepSearch(id);
    let {localidade = '' ,uf = '',logradouro = '', bairro = '', cep = ''} =test;
    sheet(logradouro, bairro, localidade, cep, uf)
  }
}
