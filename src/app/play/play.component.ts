import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  playlist: any;
  tracks : any;

  constructor(private playlistService : PlaylistService, private route : ActivatedRoute) {
    
    let id : any = this.route.snapshot.paramMap.get('id');
    
    this.playlistService.get( id ).subscribe(
      res =>{
        this.playlist = res;

        let tracks: any[] = [];

        this.playlist.tracks.items.forEach((element:any) => {
          tracks.push(element.track);
        });

        this.tracks = tracks;

        console.log(this.tracks);

        console.log(this.playlist);
      }
    );
  }

  ngOnInit(): void {
  }

}
