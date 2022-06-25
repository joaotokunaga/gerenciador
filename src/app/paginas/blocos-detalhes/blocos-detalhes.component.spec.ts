import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocosDetalhesComponent } from './blocos-detalhes.component';

describe('BlocosDetalhesComponent', () => {
  let component: BlocosDetalhesComponent;
  let fixture: ComponentFixture<BlocosDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocosDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocosDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
