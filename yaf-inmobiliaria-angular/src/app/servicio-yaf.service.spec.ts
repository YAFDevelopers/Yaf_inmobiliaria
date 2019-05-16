import { TestBed } from '@angular/core/testing';

import { ServicioYafService } from './servicio-yaf.service';

describe('ServicioYafService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioYafService = TestBed.get(ServicioYafService);
    expect(service).toBeTruthy();
  });
});
