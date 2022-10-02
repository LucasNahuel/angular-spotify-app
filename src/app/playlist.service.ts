import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private localStorage : LocalStorageService, private http : HttpClient) { }

  get(id: string){
    let params = new HttpParams();

    params = params.append('id', id);

    let access_token : any = this.localStorage.get('access_token');

    params = params.append('access_token', access_token);

    return this.http.get(environment.apiUrl+"getPlaylist", {params});

  }
}
