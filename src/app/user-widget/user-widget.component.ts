import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
import { SpotifyAuthorizeGuardService } from '../spotify-authorize-guard.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-widget',
  templateUrl: './user-widget.component.html',
  styleUrls: ['./user-widget.component.css']
})
export class UserWidgetComponent implements OnInit {

  user : any;

  widgetMenuExpanded : boolean = false;

  constructor(private localStorage : LocalStorageService, private userService : UserService, private router: Router, private loginService: SpotifyAuthorizeGuardService) {

    userService.UserLoaded.subscribe(res=>{
      
      this.user = res;

      this.localStorage.set('user', JSON.stringify(this.user));
    });
   
  }

  ngOnInit(): void {
  }

  toggleWidgetMenu(){
    this.widgetMenuExpanded = !this.widgetMenuExpanded;
    this.changeIconToggle();
  }

  changeIconToggle(): string{
    return this.widgetMenuExpanded ? "expand_less" : "expand_more"
  }

  logout(){
    this.localStorage.remove("access_token");
    this.localStorage.remove("refresh_token");
    this.localStorage.remove("expiration_time");
    this.localStorage.remove("token_receibed_date");
    this.localStorage.remove("user");
    this.user = null;
    this.widgetMenuExpanded = false;
    this.loginService.isLoggedIn.emit(false);
    this.router.navigate(['/login']);
  }

}
