import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioComponentes } from './inventario-componentes';

describe('InventarioComponentes', () => {
  let component: InventarioComponentes;
  let fixture: ComponentFixture<InventarioComponentes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventarioComponentes],
    }).compileComponents();

    fixture = TestBed.createComponent(InventarioComponentes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
