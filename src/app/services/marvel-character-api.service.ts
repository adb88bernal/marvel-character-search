import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams, Response } from '@angular/http';
import {Observable} from 'rxjs/';
import { map } from "rxjs/operators";
import {Md5 } from 'ts-md5/dist/md5';


@Injectable()
export class MarvelApiCharacterService {

  constructor(private jsonp: Jsonp) { }

  getMarvelCharacter(character: string): Observable<any>{
    let url: string = 'https://gateway.marvel.com:443/v1/public/characters';
    let apikey: string = '0c3cc99673cc363f4b84181988629b03';
    let private_key:string = '80d5a4b534dfb5b8ddddf8b0451130cba30dca75';
    let ts:string = (new Date().getTime()).toString();
    let hash:string = Md5.hashStr(ts+private_key+apikey).toString();
    
    
    let params = new URLSearchParams();
    params.set('apikey', apikey); //my key 
    params.set('ts', ts);
    params.set('hash', hash);
    params.set('name', character);
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp.get(url, { search: params}).pipe(map((res: Response) => res.json()));
  }
}
