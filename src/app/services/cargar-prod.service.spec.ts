import { TestBed } from '@angular/core/testing';

import { CargarProdService } from './cargar-prod.service';

describe('CargarProdService', () => {
  let service: CargarProdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargarProdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
