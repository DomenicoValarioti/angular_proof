import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() titoloAppDaHome: string  = ""; // passaggi valore tra componenti

  username: string = "NoName00"; // attributi della classe

  constructor() { }


  ngOnInit(): void {
  }

}
