import { DOCUMENT } from '@angular/common';
import { EventEmitter, Inject, Injectable, Renderer2 } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyPlayerService {

  playing : EventEmitter<any> = new EventEmitter();

  paused : EventEmitter<any> = new EventEmitter();

  trackPlaying: any;

  playlist : any = [];

  constructor(private localStorage: LocalStorageService,  @Inject(DOCUMENT) private document: Document) {
    
  }

  loadPlayerScript(renderer: Renderer2, src: string): HTMLScriptElement {
    const script = renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    renderer.appendChild(this.document.body, script);
    return script;
  }

  play(track: any){
    this.trackPlaying = track;
    this.paused.emit(false);
    this.playing.emit(track);
  }

  playNext(){
    let lastPlayedIndex = this.playlist.indexOf(this.trackPlaying);

    if(lastPlayedIndex+1 < this.playlist.length){
      this.play(this.playlist[lastPlayedIndex+1]);
    }
  }


  playPrevious(){
    let lastPlayedIndex = this.playlist.indexOf(this.trackPlaying);

    if(lastPlayedIndex-1 >= 0){
      this.play(this.playlist[lastPlayedIndex-1]);
    }

  }

  pause(ispaused : any){
    this.paused.emit(ispaused);
  }


}

