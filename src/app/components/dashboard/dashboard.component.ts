import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  productdetails =[
    {
      "title":"Shirt",
      "price":290,
      "src":"../../../assets/shirt2.png"

    },
    {
      "title":"Jeans",
      "price":190,
      "src":"../../../assets/jeans1.png"

    },
    {
      "title":"T-Shirt",
      "price":390,
      "src":"../../../assets/tshirt1.png"

    },


    ];
}
