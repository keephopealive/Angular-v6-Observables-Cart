import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  cart;

  constructor(private _dataService: DataService) {
    this._dataService.cart.subscribe( (cart) => {
      this.cart = cart;
    });
  }

  ngOnInit() {

  }

}
