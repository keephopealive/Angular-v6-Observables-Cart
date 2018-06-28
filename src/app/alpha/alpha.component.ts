import { BehaviorSubject } from 'rxjs';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  cart;

  constructor(private _dataService: DataService) {
    this._dataService.cart.subscribe( (cart) => {
      this.cart = cart;
    });
  }

  ngOnInit() {

  }

  add() {
    const id = 4;
    for (let idx = 0; idx < this.cart.length; idx++) {
      if (this.cart[idx].id === id) {
        this.cart[idx].qty++;
        return;
      }
    }
    this.cart.push({id: 4, qty: 1});
    this._dataService.cart.next(this.cart);
  }

}
