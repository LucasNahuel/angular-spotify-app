import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';
import { SpotifyAuthorizeGuardService } from '../spotify-authorize-guard.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchTerm : string  = "";
  searchTimeout : any;
  isLogedIn? : boolean;

  constructor(private searchService: SearchService, private router: Router, private loginService : SpotifyAuthorizeGuardService) {
     loginService.isLoggedIn.subscribe(res =>{
      this.isLogedIn = res;
     });
  }

  ngOnInit(): void {
  }

  search(){
    if(this.searchTimeout){
      clearTimeout(this.searchTimeout);
    }

    this.searchTimeout = setTimeout(() =>{
      this.searchService.search(this.searchTerm);
      this.router.navigate(['/main', this.searchTerm]);
    }, 300);


  }

}
