import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploNgContntentComponent } from './exemplo-ng-contntent.component';

describe('ExemploNgContntentComponent', () => {
  let component: ExemploNgContntentComponent;
  let fixture: ComponentFixture<ExemploNgContntentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemploNgContntentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemploNgContntentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
