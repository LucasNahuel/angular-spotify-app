import { Component, Renderer2 } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchService } from './search.service';
import { SpotifyPlayerService } from './spotify-player.service';


const SCRIPT_PATH = 'https://sdk.scdn.co/spotify-player.js';
declare let window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Spotify';

  constructor(private localStorageService : LocalStorageService, private searchService : SearchService, private spotifyPlayer : SpotifyPlayerService, private renderer: Renderer2){
    
    const scriptElement = this.spotifyPlayer.loadPlayerScript(this.renderer, SCRIPT_PATH);
    scriptElement.onload = () => {
     console.log('script loaded');
     window.onSpotifyWebPlaybackSDKReady = () => {
      console.log("The Web Playback SDK is ready. We have access to Spotify.Player");

      const token = this.localStorageService.get("access_token");
      const player = new window.Spotify.Player({
        name: 'my web angular Player',
        getOAuthToken: (cb: any) => { cb(token); },
        volume: 0.5
      });

      player.addListener('ready', ({ device_id } : any) => {
        console.log('Ready with Device ID', device_id);
      });
    
      // Not Ready
      player.addListener('not_ready', ({ device_id } : any) => {
        console.log('Device ID has gone offline', device_id);
      });

      player.addListener('initialization_error', ({ message }: any) => { 
        console.error(message);
    });
  
    player.addListener('authentication_error', ({ message }: any) => {
        console.error(message);
    });
  
    player.addListener('account_error', ({ message } : any) => {
        console.error(message);
    });

    player.connect();

      console.log(window.Spotify.Player);
    };

      // Load the JavaScript client library.
      // (the init() method has been omitted for brevity)
    }
    scriptElement.onerror = () => {
      console.log('Could not load the Google API Script!');
    }

  }

  ngOnInit() {
   
  }
  
  
}


