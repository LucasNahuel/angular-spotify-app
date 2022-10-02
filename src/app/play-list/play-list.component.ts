import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css']
})
export class PlayListComponent implements OnInit {

  @Input() playlists : any;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  navigateToPlaylist(id:string){
    this.router.navigate(['/play', id]);
  }
}
