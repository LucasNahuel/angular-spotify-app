import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterOutlet, RouterStateSnapshot } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthorizeaGuardService {

  constructor(private localStorage : LocalStorageService, private router : Router, private activatedRoute : ActivatedRoute) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {

    
    if(!this.localStorage.get('access_token') || !this.localStorage.get('refresh_token')){

      
      console.log("login accepted!");
      return true;
    }

    this.router.navigate(['/main']);

  }
}
