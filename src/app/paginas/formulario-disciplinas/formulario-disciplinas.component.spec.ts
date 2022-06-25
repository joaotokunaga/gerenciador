import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDisciplinasComponent } from './formulario-disciplinas.component';

describe('FormularioDisciplinasComponent', () => {
  let component: FormularioDisciplinasComponent;
  let fixture: ComponentFixture<FormularioDisciplinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioDisciplinasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDisciplinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
