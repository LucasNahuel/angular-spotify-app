import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { get } from 'scriptjs';
import { SearchService } from '../search.service';
import { SpotifyPlayerService } from '../spotify-player.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  tracks = null;
  albums = null;
  playlists = null;
  artists = null;
  recomendedTracks = null;
  recomendedArtists = null;

  searchFilter = null;

  constructor(private userService : UserService, private searchService : SearchService, private spotifyPlayer : SpotifyPlayerService,  private route : ActivatedRoute, private router : Router) {
  
  }

  ngOnInit(): void {
    this.route.params.subscribe((routeParams:any) => {
      if(routeParams.search){

        if(routeParams.filter){
          this.searchService.searchFilter = routeParams.filter;
        }

        this.searchService.search(routeParams.search).subscribe(res =>{
        
          console.log({res});
          this.tracks = res.tracks ? res.tracks.items : null;
          this.albums = res.albums ? res.albums.items : null;
          this.playlists = res.playlists ? res.playlists.items : null;
          this.artists = res.artists ? res.artists.items : null;
  
        });
      }else{
        this.userService.getRecomendedTracks().subscribe(res=>{
          this.recomendedTracks = res.items ? res.items : null;
          
        });

        this.userService.getRecomendedArtists().subscribe(res=>{
          this.recomendedArtists = res.items ? res.items : null;
          console.log({res});
        });
      }
    });
  }


  loadPlayer(){
  }

  filterSearch(filter : string){
    this.searchService.searchFilter = filter;

    if(this.searchService.lastSearchTerm){
      this.router.navigate(['/main', this.searchService.lastSearchTerm, filter]);
    }
    
  }

}
