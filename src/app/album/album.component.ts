import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  album : any = null;
  tracks: any;

  constructor(private route : ActivatedRoute, private albumService : AlbumService) {
     let albumId : any = this.route.snapshot.paramMap.get('id');

    this.albumService.get(albumId).subscribe(res =>{
      console.log({res});
      this.album = res;
      this.tracks = this.getTracks();
    });
  }

  ngOnInit(): void {
  }

  getTracks(){
    let tracks = [];

    for(let i = 0; i<this.album.tracks.items.length; i++){
      tracks.push({
        preview_url: this.album.tracks.items[i].preview_url,
        name: this.album.tracks.items[i].name,
        album : { images : [ { url : this.album.images[2].url }, { url : this.album.images[2].url }, { url : this.album.images[2].url }, { url : this.album.images[2].url }], name: this.album.name},
        artists : this.album.artists,
        duration_ms: this.album.tracks.items[i].duration_ms
      });
    }

    console.log({tracks});

    return tracks;
  }

}
