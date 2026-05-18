import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { ResenaComponent } from './resenas-componentes'; // Apunta exacto al archivo nativo

describe('ResenaComponent', () => {
  let component: ResenaComponent;
  let fixture: ComponentFixture<ResenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResenaComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ResenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});