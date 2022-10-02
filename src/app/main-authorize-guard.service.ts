import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LocalStorageService } from './local-storage.service';
import { SpotifyAuthorizeGuardService } from './spotify-authorize-guard.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MainAuthorizeGuardService implements CanActivate{

  constructor(private localStorage : LocalStorageService, private router : Router,  private userService : UserService, private loginService : SpotifyAuthorizeGuardService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {

    if(this.localStorage.get('access_token') && this.localStorage.get('refresh_token')){

      let expiration_time : any = this.localStorage.get('expiration_time');
      let token_receibed_date : any = this.localStorage.get('token_receibed_date');

      

      console.log(Date.now() - new Date(Number.parseInt(token_receibed_date)).getTime());

      if(Date.now() - new Date(Number.parseInt(token_receibed_date)).getTime() < (Number.parseInt(expiration_time) ? (Number.parseInt(expiration_time) * 1000) : 3600000) ){
        let user : any = this.localStorage.get('user');
        this.userService.UserLoaded.emit(JSON.parse(user));
        this.loginService.isLoggedIn.emit(true);
        return true;
      }else{
        this.localStorage.remove("refresh_token");
      }

      
    }

      console.log("main denied!"); 
      this.router.navigate(['/login']);
    
  }
}
