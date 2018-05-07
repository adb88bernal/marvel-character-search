import { TestBed, inject } from '@angular/core/testing';

import { MarvelApiCharacterService } from './marvel-character-api.service';

describe('MarvelApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarvelApiCharacterService]
    });
  });

  it('should be created', inject([MarvelApiCharacterService], (service: MarvelApiCharacterService) => {
    expect(service).toBeTruthy();
  }));
});
