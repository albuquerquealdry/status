import { Test, TestingModule } from '@nestjs/testing';
import { StatusRepository } from '../repository/status.repository';
import { StatusService } from '../service/status.service';

describe('StatusService', () => {
  let service: StatusService;
  let statusRepository :StatusRepository

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatusService, StatusRepository],
    }).compile();
    statusRepository = new StatusRepository();
    service = new StatusService(statusRepository);
  });

  it('Quando for mockado a promisse retorne ""', async () => {
    
    let mock = 123
    statusRepository.cepSearch = jest.fn(()=>Promise.resolve({}));

    const resp = await service.parseCep(mock);
    expect(resp).toEqual('A entrega foi inserida na planilha');
  
  })
  it('Chamada do create', ()=>{
    const resp2 = service.findAll()
    expect(resp2).toEqual('Planilha atualizadda')
  });
  

  // it('Teste de erro na função', async () => {
    
  //   let mock = '123'
  //   axios.get = jest.fn(()=>Promise.reject({}))
  //   //console.log('teste')
  //   try {
  //     const resp = await statusRepository.cepSearch(mock);
  //   } catch (error) {
  //     expect(error).toEqual({});
  //   }
  // });

});
