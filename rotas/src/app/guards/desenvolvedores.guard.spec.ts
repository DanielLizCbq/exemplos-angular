import { TestBed, async, inject } from '@angular/core/testing';

import { DesenvolvedoresGuard } from './desenvolvedores.guard';

describe('DesenvolvedoresGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DesenvolvedoresGuard]
    });
  });

  it('should ...', inject([DesenvolvedoresGuard], (guard: DesenvolvedoresGuard) => {
    expect(guard).toBeTruthy();
  }));
});
