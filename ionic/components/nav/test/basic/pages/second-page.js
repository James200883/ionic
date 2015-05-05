import {Component, View, Parent} from 'angular2/angular2'
import {NavController} from 'ionic/components'
import {ThirdPage} from 'pages/third-page'


@Component()
@View({
  templateUrl: 'pages/second-page.html'
})
export class SecondPage {
  constructor(
    nav: NavController
  ) {
    this.nav = nav
  }
  pop() {
    this.nav.pop();
  }
  push() {
    this.nav.push(ThirdPage);
  }
}