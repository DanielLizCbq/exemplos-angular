import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesenvolvedoresDetalheComponent } from './desenvolvedores-detalhe.component';

describe('DesenvolvedoresDetalheComponent', () => {
  let component: DesenvolvedoresDetalheComponent;
  let fixture: ComponentFixture<DesenvolvedoresDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesenvolvedoresDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesenvolvedoresDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
