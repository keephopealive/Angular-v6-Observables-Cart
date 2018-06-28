import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  cart = new BehaviorSubject([
    { id: 1, qty: 1},
    { id: 2, qty: 1},
    { id: 3, qty: 1},
  ]);

  constructor() { }

  getData() {
    // this._http.get('/data')
    // .subscrice(
    //   (data) => {
    //     this.cart = data;
    //   }
    // )
  }
}
