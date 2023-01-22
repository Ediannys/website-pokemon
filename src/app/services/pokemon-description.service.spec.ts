import { TestBed } from '@angular/core/testing';

import { PokemonDescriptionService } from './pokemon-description.service';

describe('PokemonDescriptionService', () => {
  let service: PokemonDescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonDescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
