import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mahi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  IsDrawer: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
