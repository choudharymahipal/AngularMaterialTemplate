import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mahi-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  username: string = "Mahipal";
  
  constructor() { }

  ngOnInit(): void {
  }

}
