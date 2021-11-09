import { Test, TestingModule } from '@nestjs/testing';
import { StatusRepository } from 'src/repository/status.repository';
import { StatusService } from '../service/status.service';

describe('StatusService', () => {
  let service: StatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatusService, StatusRepository],
    }).compile();

    service = module.get<StatusService>(StatusService);
  });

  it('Quando o metodo de pesquisa for usado, ele retornará OK', () => {
    expect(service.parseCep).toEqual('OK');
  });
});
