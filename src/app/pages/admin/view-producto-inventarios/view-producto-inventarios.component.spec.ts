import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductoInventariosComponent } from './view-producto-inventarios.component';

describe('ViewProductoInventariosComponent', () => {
  let component: ViewProductoInventariosComponent;
  let fixture: ComponentFixture<ViewProductoInventariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductoInventariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProductoInventariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
