import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SpotifyPlayerService } from '../spotify-player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  playing : any;

   @ViewChild('audio') audio : ElementRef | undefined;
   @ViewChild('trackMiniature') trackMiniature : ElementRef | undefined;

  public onplay : boolean = false;

  currentTime : any;
  volume : any;

  verticalVolumeSlider = window.innerWidth > 768 ? false : true;
  

  constructor(private playerService:  SpotifyPlayerService, private renderer : Renderer2) { 
    this.playerService.playing.subscribe( res => {
      this.onplay = true;
      this.renderer.setStyle(this.trackMiniature?.nativeElement, "transform", "scaley(0)");
      
      
      setTimeout(() => {
        this.playing = res;
        this.renderer.setStyle(this.trackMiniature?.nativeElement, "transform", "scaley(1)");
      }, 200);
      
    });

    
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    this.currentTime = this.audio?.nativeElement.currentTime;
    this.volume = 0.1;
    this.changeVolume();
  }


  togglePlay(){
    this.onplay ? this.audio?.nativeElement.pause() : this.audio?.nativeElement.play();
    this.onplay = !this.onplay;
    this.playerService.pause(!this.onplay);
  }

  playingEnded(){
    this.playerService.playNext();
  }

  playPrevious(){
    this.playerService.playPrevious();
  }

  playNext(){
    this.playerService.playNext();
  }


  calctime(){
    this.currentTime = this.audio?.nativeElement.currentTime;
  }

  seek(){

    this.audio?.nativeElement.currentTime ? this.audio.nativeElement.currentTime = this.currentTime : this.audio?.nativeElement.currentTime;
    
  }

  getTime(){
    return Math.floor(this.currentTime);
  }

  changeVolume(){
    this.audio?.nativeElement.volume ? this.audio.nativeElement.volume = this.volume : this.audio?.nativeElement.volume;
  }

  onResize(event : any) {
    this.verticalVolumeSlider = window.innerWidth > 768 ? false : true;
  }

  

}
