import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAuthorizeGuardService implements CanActivate{

  isLoggedIn : EventEmitter<boolean> = new EventEmitter();

  constructor(private localStorage : LocalStorageService, private router : Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {

    if(this.localStorage.get('access_token') && this.localStorage.get('refresh_token')){

      let expiration_time = this.localStorage.get('expiration_time');
      let token_receibed_date = this.localStorage.get('token_receibed_date');

      if(Date.now() - new Date(token_receibed_date ? token_receibed_date : 0).getTime() < 3600 ){
        this.isLoggedIn.emit(true);
        this.router.navigate(['/main']);
        return true;
      }

      
    }
      this.router.navigate(['/login']);
    
  }


}
