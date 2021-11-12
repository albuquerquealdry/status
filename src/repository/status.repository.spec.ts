import { Test, TestingModule } from '@nestjs/testing';
import { StatusRepository } from './status.repository';
import axios from 'axios'
describe('StatusRepository', () => {
    let statusRepository :StatusRepository;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [StatusRepository],
      }).compile();
      statusRepository = new StatusRepository()
    });
    it('should be defined', () => {
        expect(statusRepository).toBeDefined();
        
      });
      it('Quando a minha chamada obter sucesso', ()=>{
        let mockid = '54510280' 
        let req = statusRepository.cepSearch(mockid)
        expect(req)
        axios.get = jest.fn(()=>Promise.reject({}))

      })
})