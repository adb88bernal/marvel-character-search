import { Component, OnInit } from '@angular/core';
import { MarvelApiCharacterService } from '../services/marvel-character-api.service';
import { MarvelComicsApiService } from '../services/marvel-comics-api.service'
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: []
})
export class SearchComponent implements OnInit {
  completeMarvelData=[];
  completeComicsData=[];
  char_id: number;
  init_Character: string = 'Spider-Man';

  constructor(private marvelCharService: MarvelApiCharacterService,
              private marvelComicsService: MarvelComicsApiService) { }

  ngOnInit() {
    this.searchMarvel(this.init_Character);
  }

  searchMarvel(character: string){
    this.marvelCharService.getMarvelCharacter(character)
    .subscribe(results =>
    {
      this.completeComicsData = [];
      this.completeMarvelData = [];

      this.completeMarvelData.push(results.data.results[0]);

      this.char_id = results.data.results[0].id;
      
      this.marvelComicsService.getMarvelComics(this.char_id)
      .subscribe(results2 =>{
        this.completeComicsData.push(results2.data.results);
      });
    }
    )
  }

}
