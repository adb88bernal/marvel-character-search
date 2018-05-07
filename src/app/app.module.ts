import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { MarvelApiCharacterService } from './services/marvel-character-api.service';
import { MarvelComicsApiService } from './services/marvel-comics-api.service'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    FormsModule,
    HttpClientModule, HttpModule
  ],
  providers: [MarvelApiCharacterService, MarvelComicsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
