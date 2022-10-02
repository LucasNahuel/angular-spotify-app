import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { SpotifyPlayerService } from '../spotify-player.service';

@Component({
  selector: 'app-tracks-list',
  templateUrl: './tracks-list.component.html',
  styleUrls: ['./tracks-list.component.css']
})
export class TracksListComponent implements OnInit {

  @Input() tracks: any;
  @Input() rowHeaders : any = ['play', 'album-image', 'name', 'album.name', 'track.length'];
  @Input() rows :any = ['play', 'album-image', 'name', 'album.name', 'track.length'];
  playingIndex: any;
  playingTrack: any;
  paused: any;

  constructor(private playerService : SpotifyPlayerService) {
    playerService.playing.subscribe(res =>{
      this.playingTrack = res;
      this.playingIndex = this.tracks.indexOf(playerService.trackPlaying);
      this.paused = false;
    });

    playerService.paused.subscribe(res =>{
      this.paused = res;
    });
   }

  ngOnInit(): void {
  }

  formatDurationToMinutes(duration_ms: number): string{
    var minutes = Math.floor(duration_ms / 60000);
    var seconds = ((duration_ms % 60000) / 1000).toFixed(0);
    var secondsNumber = Number.parseInt(seconds);
    return minutes + ":" + (secondsNumber < 10 ? '0' : '') + seconds;
  }

  playTrack(trackSrc : any){
    this.playerService.playlist = this.tracks;
    this.playerService.play(trackSrc);
  }

  showPlayingEffect(){

  }



}
