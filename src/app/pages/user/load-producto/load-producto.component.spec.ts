import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadProductoComponent } from './load-producto.component';

describe('LoadProductoComponent', () => {
  let component: LoadProductoComponent;
  let fixture: ComponentFixture<LoadProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
