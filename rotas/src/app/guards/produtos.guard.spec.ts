import { TestBed, async, inject } from '@angular/core/testing';

import { ProdutosGuard } from './produtos.guard';

describe('ProdutosGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdutosGuard]
    });
  });

  it('should ...', inject([ProdutosGuard], (guard: ProdutosGuard) => {
    expect(guard).toBeTruthy();
  }));
});
