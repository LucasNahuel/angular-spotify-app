import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchResult: EventEmitter<any> = new EventEmitter();

  searchFilter : string = 'all';

  lastSearchTerm : any;

  constructor(private localStorage : LocalStorageService, private http: HttpClient) { }

  search(searchTerm: string){

    var params = new HttpParams();

    const access_token : any = this.localStorage.get("access_token");


    params = params.append('access_token', access_token);
    params = params.append('searchTerm', searchTerm);
    params = params.append('type', this.searchFilter == 'all' ? 'track,album,artist,playlist' : this.searchFilter);

    this.localStorage.set('lastSearch', searchTerm);
    this.lastSearchTerm = searchTerm;

    return this.http.get<any>(environment.apiUrl+"search", {params});

  }

  searchLast(){

    const lastSearchTerm = this.localStorage.get('lastSearch');

    if(lastSearchTerm){
      this.search(lastSearchTerm);
    }
  }


}
