import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceberProdutoCriadoComponent } from './receber-produto-criado.component';

describe('ReceberProdutoCriadoComponent', () => {
  let component: ReceberProdutoCriadoComponent;
  let fixture: ComponentFixture<ReceberProdutoCriadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceberProdutoCriadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceberProdutoCriadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
