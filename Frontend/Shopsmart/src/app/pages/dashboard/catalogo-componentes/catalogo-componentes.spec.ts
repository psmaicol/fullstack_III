import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoComponentes } from './catalogo-componentes';

describe('CatalogoComponentes', () => {
  let component: CatalogoComponentes;
  let fixture: ComponentFixture<CatalogoComponentes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoComponentes],
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogoComponentes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
