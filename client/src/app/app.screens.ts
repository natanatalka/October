/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu.component';
import { Www_PhonePortrait } from '../pages/Www/PhonePortrait/Www';
import { Eee_PhonePortrait } from '../pages/Eee/PhonePortrait/Eee';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    Www_PhonePortrait,
    Eee_PhonePortrait
  ];
  static mapping = {
    'Www': {
      PhonePortrait: Www_PhonePortrait
    },
    'Eee': {
      PhonePortrait: Eee_PhonePortrait
    }
  }
}