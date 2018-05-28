import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesenvolvedoresFormComponent } from './desenvolvedores-form.component';

describe('DesenvolvedoresFormComponent', () => {
  let component: DesenvolvedoresFormComponent;
  let fixture: ComponentFixture<DesenvolvedoresFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesenvolvedoresFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesenvolvedoresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
