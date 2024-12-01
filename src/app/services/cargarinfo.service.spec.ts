import { TestBed } from '@angular/core/testing';

import { CargarinfoService } from './cargarinfo.service';

describe('CargarinfoService', () => {
  let service: CargarinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargarinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
