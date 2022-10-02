import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EventEmitter } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  UserLoaded : EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient, private localStorage : LocalStorageService) { }

  GetMe(){
    let params = new HttpParams();

    console.log(this.localStorage.get("access_token")); 
    console.log(this.localStorage.get("refresh_token")); 

    let access_token : any = this.localStorage.get("access_token");
    let refresh_token : any = this.localStorage.get("access_token");
    

    params = params.append('access_token', access_token);
    params = params.append('refresh_token', refresh_token);

    this.http.get<any>(environment.apiUrl+"GetMe", {params}).subscribe( res=>{
      this.UserLoaded.emit(res);
    });
  }

  getRecomendedTracks(){
    let params = new HttpParams();

    let access_token : any = this.localStorage.get("access_token");
    params = params.append('access_token', access_token);
    params = params.append('type', 'tracks');

    return this.http.get<any>(environment.apiUrl+"getRecomended", {params});
  }

  getRecomendedArtists(){
    let params = new HttpParams();

    let access_token : any = this.localStorage.get("access_token");
    params = params.append('access_token', access_token);
    params = params.append('type', 'artists');

    return this.http.get<any>(environment.apiUrl+"getRecomended", {params});
  }

}
