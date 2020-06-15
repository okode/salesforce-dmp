import { Component } from '@angular/core';
import { DMPPlugin } from 'cordova-plugin-salesforce-dmp';

declare var DMP: DMPPlugin;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  initialize() {
    DMP.initialize({ apiKey: 'uwgimqbe0' })
      .then(success => { console.log(success); })
      .catch(err => console.log('DMP request error', err));
  }

  sendRequests() {
    DMP.sendRequests({})
      .then(success => {
        console.log(success);
      })
      .catch(err => { console.log('Dmp request error', err); });
  }

  trackPage() {
    DMP.trackPage({
      email: 'support@okode.com',
      logged: true,
      path: '/home',
      pageType: 'home'
    })
      .then(success => { console.log(success); })
      .catch(err => { console.log('Dmp request error', err); });
  }

  fireEvent() {
    DMP.fireEvent({
      action: 'click',
      category: 'button',
      label: 'Connect to dmp'
    })
      .then(success => { console.log(success); })
      .catch(err => { console.log('Dmp request error', err); });
  }

}
