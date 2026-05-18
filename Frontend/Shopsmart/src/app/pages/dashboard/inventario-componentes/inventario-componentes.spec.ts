import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { InventarioComponentesComponent } from './inventario-componentes';

describe('InventarioComponentesComponent', () => {
  let component: InventarioComponentesComponent;
  let fixture: ComponentFixture<InventarioComponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventarioComponentesComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(InventarioComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});