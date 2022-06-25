import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEstudosComponent } from './formulario-estudos.component';

describe('FormularioEstudosComponent', () => {
  let component: FormularioEstudosComponent;
  let fixture: ComponentFixture<FormularioEstudosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioEstudosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEstudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
