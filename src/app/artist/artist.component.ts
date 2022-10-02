import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistService } from '../artist.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist : any;
  topTracks : any;
  albums : any;
  relatedArtists : any;


  constructor(private localStorage : LocalStorageService, private artistService : ArtistService, private router : ActivatedRoute) { 

    let access_token : any = localStorage.get('access_token');
    let id: any = router.snapshot.paramMap.get('id');


    artistService.get(id).subscribe(res =>{
      this.artist = res;
    });

    artistService.getArtistTopTracks(id).subscribe((res:any) =>{
      this.topTracks = res.tracks.length > 0 ? res.tracks : null;
    });

    artistService.getArtistAlbums(id).subscribe((res: any) =>{
      this.albums = res.items.length > 0 ? res.items : null;
    });

    artistService.getRelatedArtists(id).subscribe((res: any)=>{
      this.relatedArtists = res.artists.length > 0 ? res.artists : null;
      
    });

    

  }

  ngOnInit(): void {
  }

}
