import { TestBed } from '@angular/core/testing';

import { ProductosService } from './producto.service';

describe('Producto2Service', () => {
  let service: ProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});