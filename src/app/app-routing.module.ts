import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';
import { LoginAuthorizeaGuardService } from './login-authorizea-guard.service';
import { LoginComponent } from './login/login.component';
import { MainAuthorizeGuardService } from './main-authorize-guard.service';
import { MainComponent } from './main/main.component';
import { PlayComponent } from './play/play.component';
import { SpotifyAuthorizeGuardService } from './spotify-authorize-guard.service';

const routes: Routes = [
  { path: 'login/:access_token/:refresh_token/:expiration_time', component: LoginComponent, canActivate: [LoginAuthorizeaGuardService]},
  { path: 'login', component: LoginComponent, canActivate: [LoginAuthorizeaGuardService]},
  { path: '', component: AppComponent, canActivate: [SpotifyAuthorizeGuardService] },
  { path: 'main', component: MainComponent, canActivate : [MainAuthorizeGuardService] },
  { path: 'album/:id', component: AlbumComponent, canActivate : [MainAuthorizeGuardService] },
  { path: 'play/:id', component: PlayComponent, canActivate : [MainAuthorizeGuardService] },
  { path: 'artist/:id', component: ArtistComponent, canActivate : [MainAuthorizeGuardService] },
  { path: 'main/:search', component: MainComponent, canActivate : [MainAuthorizeGuardService] },
  { path: 'main/:search/:filter', component: MainComponent, canActivate : [MainAuthorizeGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
