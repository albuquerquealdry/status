import { Test, TestingModule } from '@nestjs/testing';
import { StatusController } from './status.controller';
import { StatusService } from '../service/status.service';
import { StatusRepository } from 'src/repository/status.repository';
import { response } from 'express';

describe('StatusController', () => {
  let controller: StatusController;
  let statusService : StatusService
 //let statusRepository :StatusRepository
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StatusController],
      providers: [
        {
          provide : StatusService,
          useValue : {
            parseCep : jest.fn(),
            send : jest.fn()
          }
        },
      ],
    }).compile();
    
    
    statusService = module.get <StatusService>(StatusService)
    controller = new  StatusController(statusService)
  });
  it('should be defined', () => {
      expect(controller).toBeDefined();
      expect(statusService).toBeDefined()
    });
  describe('Teste Get All', ()=>{
    it('Isso Deve Retornar a informação do dado na url', async ()=>{
      const result = controller.findAll()
      expect(result).toEqual('Coloque o cep na url')
    
    })
  describe('Teste parse ID', ()=>{
    
    it ('o parseCep deve retornar os dados do usuário', async ()=>{
      let id = '54510280'
      const result = controller.parseCep()
      expect (result).toEqual(response.send('Entrega inserida na Planilha'))
      expect (result).toEqual(statusService.parseCep(id))
      
    })
  })
  })
  });
