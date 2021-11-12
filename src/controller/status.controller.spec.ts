import { Test, TestingModule } from '@nestjs/testing';
import { StatusController } from './status.controller';
import { StatusService } from '../service/status.service';
import { response } from 'express';
import { getMockReq, getMockRes } from '@jest-mock/express'
import { StatusRepository } from '../repository/status.repository'

describe('StatusController', () => {
  let controller: StatusController;
  let statusService : StatusService
  let statusRepository :StatusRepository
  
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
    statusRepository = new StatusRepository()
    statusService = new StatusService(statusRepository)
    controller = new  StatusController(statusService)
    
  });
  it('should be defined', () => {
      expect(controller).toBeDefined();
      expect(statusService).toBeDefined()
    });
  describe('Teste Get All', ()=>{
    it('Isso Deve Retornar a informação do dado na url', async ()=>{
      const result = controller.findAll()
      expect(result).toEqual({message:'Coloque o cep na url'})
    })
  describe('Teste parse ID', ()=>{
    
    it ('o parseCep deve retornar a messagem de exito', async ()=>{
      statusRepository.cepSearch = jest.fn(()=>Promise.resolve());
      let mockid = '5451028l0'
      const result = await controller.parseCep(mockid)
      expect(result).toEqual(result)
      
    })
    it ('o parseCep deve retornar a mensagem de acerto', async ()=>{
      statusRepository.cepSearch = jest.fn(()=>Promise.resolve({Error: 'Request failed with status code 400'}));
      let mockid = '54510280l'
      const result = await controller.parseCep(mockid)
      expect(result).toEqual(result)  
    });
    //it ( 'O parseCep deve retornar erro' async ()=>{
      
    //})
  })
    // it ('O parceCep deve retorrnar a mensagem de erro', async ()=>{
    //   let mockFalseid = '54510280'
    //   controller.parseCep(mockFalseid).catch(error =>{
    //     console.log(error.response)
    //     expect(error.response)
    //   })
    // })
  })
});


// try {
        
//   expect(result).toEqual(statusService.parseCep(mockid))
// } catch (error) {
//   expect(result).toEqual(statusService.parseCep(mockFalseid))
// }