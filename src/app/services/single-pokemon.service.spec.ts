import { TestBed } from '@angular/core/testing';

import { SinglePokemonService } from './single-pokemon.service';

describe('SinglePokemonService', () => {
  let service: SinglePokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SinglePokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
