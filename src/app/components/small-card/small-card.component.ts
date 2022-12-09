import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  smallPhoto: string='';
  @Input()
  smallTitle: string='';
  Id: string='0';
  /*
  url:string='https://pokeapi.co/api/v2/pokemon?offset=0&limit=4'
  getPokemons=fetch(this.url).then(response => response.json()).
                              then(Jbody => console.log(Jbody));
                              */
  
  constructor() { }

  ngOnInit(): void {
  }

}
