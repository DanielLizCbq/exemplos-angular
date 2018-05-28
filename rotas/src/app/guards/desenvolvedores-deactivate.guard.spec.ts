import { TestBed, async, inject } from '@angular/core/testing';

import { DesenvolvedoresDeactivateGuard } from './desenvolvedores-deactivate.guard';

describe('DesenvolvedoresDeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DesenvolvedoresDeactivateGuard]
    });
  });

  it('should ...', inject([DesenvolvedoresDeactivateGuard], (guard: DesenvolvedoresDeactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
