import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SearchService } from './search.service';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { UserWidgetComponent } from './user-widget/user-widget.component';
import {MatIconModule} from '@angular/material/icon';
import { TracksListComponent } from './tracks-list/tracks-list.component';
import {MatTableModule} from '@angular/material/table';
import { OverlayComponent } from './overlay/overlay.component';
import {MatListModule} from '@angular/material/list';
import { PlayerComponent } from './player/player.component';
import {MatSliderModule} from '@angular/material/slider';
import { AlbumListComponent } from './album-list/album-list.component';
import { PlayListComponent } from './play-list/play-list.component';
import {MatChipsModule} from '@angular/material/chips';
import { AlbumComponent } from './album/album.component';
import { PlayComponent } from './play/play.component';
import { ArtistsListComponent } from './artists-list/artists-list.component';
import { ArtistComponent } from './artist/artist.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    ToolbarComponent,
    SearchBarComponent,
    UserWidgetComponent,
    TracksListComponent,
    OverlayComponent,
    PlayerComponent,
    AlbumListComponent,
    PlayListComponent,
    AlbumComponent,
    PlayComponent,
    ArtistsListComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatListModule,
    MatSliderModule,
    MatChipsModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
