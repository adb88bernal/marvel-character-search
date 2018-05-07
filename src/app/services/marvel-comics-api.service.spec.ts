import { TestBed, inject } from '@angular/core/testing';

import { MarvelComicsApiService } from './marvel-comics-api.service';

describe('MarvelComicsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarvelComicsApiService]
    });
  });

  it('should be created', inject([MarvelComicsApiService], (service: MarvelComicsApiService) => {
    expect(service).toBeTruthy();
  }));
});
