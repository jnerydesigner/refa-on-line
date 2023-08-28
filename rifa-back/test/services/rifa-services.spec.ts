import { RifaService } from '@application/services/rifa.service';

describe('Rifa Service', () => {
  const rifaService = new RifaService();
  it('should create service', () => {
    expect(rifaService).toBeDefined();
  });
});
