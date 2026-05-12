import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioComponentes } from './inicio-componentes';

describe('InicioComponentes', () => {
  let component: InicioComponentes;
  let fixture: ComponentFixture<InicioComponentes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioComponentes],
    }).compileComponents();

    fixture = TestBed.createComponent(InicioComponentes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
