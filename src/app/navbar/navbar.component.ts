import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  linkMenuList: string[] = ["Testo1", "Testo2", "Testo3", "Testo4" ];

  constructor() { }

  ngOnInit(): void {
  }

}
