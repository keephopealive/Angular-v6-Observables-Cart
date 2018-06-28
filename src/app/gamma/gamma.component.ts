import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.css']
})
export class GammaComponent implements OnInit {

  cart;

  constructor(private _dataService: DataService) {
    this._dataService.cart.subscribe( (cart) => {
      this.cart = cart;
    });
  }

  ngOnInit() {

  }
}
