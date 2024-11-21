import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  number: number = 0; // Initialize the number to start from 1
@Input() srcLink !: string;
@Input() price !:string | number;
@Input() title !:string;


constructor(){

}

ngOnInit(){
  console.log(this.srcLink, this.price, this.title);

}


addnumber() {
  this.number++; // Increment the number by 1
}

removenumber() {
  if (this.number > 0) {
    // Prevent the number from going below 0
    this.number--;
  }
}

}

