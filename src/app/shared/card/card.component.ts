import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
@Input() srcLink !: string;
@Input() price !:string | number;
@Input() title !:string;


constructor(){

}

ngOnInit(){
  console.log(this.srcLink, this.price, this.title);

}
}
