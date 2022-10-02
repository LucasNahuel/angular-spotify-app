import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http : HttpClient, private router : Router, private localStorage : LocalStorageService) { }

  get(id: string){
    let params = new HttpParams();

    params = params.append('id', id);

    let access_token : any = this.localStorage.get('access_token');

    params = params.append('access_token', access_token);

    return this.http.get(environment.apiUrl+"getAlbum", {params});

  }
}
