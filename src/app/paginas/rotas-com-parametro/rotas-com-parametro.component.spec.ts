import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotasComParametroComponent } from './rotas-com-parametro.component';

describe('RotasComParametroComponent', () => {
  let component: RotasComParametroComponent;
  let fixture: ComponentFixture<RotasComParametroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotasComParametroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotasComParametroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
