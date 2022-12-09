import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { dataFake } from 'src/app/components/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  contentPhoto:string='';
  @Input()
  contentTitle:string='';
  @Input()
  contentDescription:string='';
  private id:string | null='0';

  /* captura o valor Id dos componentes big-card e small-card ao serem clicados */
  constructor(private route:ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => this.id=value.get('id')
    );
  }

  setvaluesToComponent(id:string){ 
    // result é um array
    const result = dataFake.filter(article => article.id = id )[0];
    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.contentPhoto = result.photo;
  }

}
