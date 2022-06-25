import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCicloComponent } from './formulario-ciclo.component';

describe('FormularioCicloComponent', () => {
  let component: FormularioCicloComponent;
  let fixture: ComponentFixture<FormularioCicloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCicloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCicloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
