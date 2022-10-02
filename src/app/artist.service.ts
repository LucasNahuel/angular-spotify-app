import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private localStorage: LocalStorageService, private http : HttpClient) { }

  get(id: string){
    let params = new HttpParams();

    params = params.append('id', id);

    let access_token : any = this.localStorage.get('access_token');

    params = params.append('access_token', access_token);

    return this.http.get(environment.apiUrl+"getArtist", {params});

  }

  getArtistTopTracks(id : string){
    let params = new HttpParams();

    params = params.append('id', id);

    let access_token : any = this.localStorage.get('access_token');

    params = params.append('access_token', access_token);

    
    let user : any = this.localStorage.get('user');

    params = params.append('market', JSON.parse(user).country);



    return this.http.get(environment.apiUrl+"getArtistTopTracks", {params});
  }

  getArtistAlbums(id : string){
    let params = new HttpParams();

    params = params.append('id', id);

    let access_token : any = this.localStorage.get('access_token');

    params = params.append('access_token', access_token);

    return this.http.get(environment.apiUrl+"getArtistAlbums", {params});
  }

  getRelatedArtists(id : string){
    let params = new HttpParams();

    params = params.append('id', id);

    let access_token : any = this.localStorage.get('access_token');

    params = params.append('access_token', access_token);

    return this.http.get(environment.apiUrl+"getRelatedArtists", {params});
  }
}
