import { Injectable } from '@nestjs/common';
import { CreateStatusDto } from '../dto/create-status.dto';
import { StatusRepository } from '../repository/status.repository';
import  sheet  from '../repository/sheet.repository';
@Injectable()
export class StatusService {

  constructor(private readonly statusRepository : StatusRepository){

  };
  findAll() {
    return 'Planilha atualizadda'
  };
  async parseCep(id) {
    const test =await this.statusRepository.cepSearch(id);
    let {localidade = '' ,uf = '',logradouro = '', bairro = '', cep = ''} =test;
    sheet(logradouro, bairro, localidade, cep, uf)
    const response = 'A entrega foi inserida na planilha com sucesso'
    return response
  };
};
