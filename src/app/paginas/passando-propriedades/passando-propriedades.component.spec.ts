import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassandoPropriedadesComponent } from './passando-propriedades.component';

describe('PassandoPropriedadesComponent', () => {
  let component: PassandoPropriedadesComponent;
  let fixture: ComponentFixture<PassandoPropriedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassandoPropriedadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassandoPropriedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
