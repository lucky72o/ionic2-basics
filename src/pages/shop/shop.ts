import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {BuyoutPage} from "./buyout/buyout";


@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {
  constructor(public navCtrl: NavController) {

  }

  onGoToBuyOut(product: string) {
    this.navCtrl.push(BuyoutPage, {"productName": product});
  }
}
