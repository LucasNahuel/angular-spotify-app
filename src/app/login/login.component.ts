import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterOutlet } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute, private localStorage : LocalStorageService, private router : Router, private userService: UserService) { }

  ngOnInit(): void {
    
    let access_token = this.activatedRoute.snapshot.paramMap.get('access_token');
    let refresh_token = this.activatedRoute.snapshot.paramMap.get('refresh_token');
    let expiration_time = this.activatedRoute.snapshot.paramMap.get('expiration_time');


    console.log(expiration_time);

    if(access_token && refresh_token && expiration_time){
      this.localStorage.set("access_token", access_token);
      this.localStorage.set("refresh_token", refresh_token);
      this.localStorage.set("expiration_time", expiration_time);
      this.localStorage.set("token_receibed_date", Date.now().toString());
      this.userService.GetMe();
      this.router.navigate(['/main']);
    }


  }

}
