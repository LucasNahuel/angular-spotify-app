import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  @Input() albums : any;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  navigateAlbum(id :string){
    this.router.navigate(['/album', id]);
  }


}
