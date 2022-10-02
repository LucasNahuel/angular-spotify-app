import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.css']
})
export class ArtistsListComponent implements OnInit {

  @Input() artists : any;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  navigateArtist(id: string){
    this.router.navigate(['/artist', id]);
  }

}
