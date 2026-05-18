import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoComponentesComponent } from './catalogo-componentes';

describe('CatalogoComponentesComponent', () => {
  let component: CatalogoComponentesComponent;
  let fixture: ComponentFixture<CatalogoComponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoComponentesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogoComponentesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
