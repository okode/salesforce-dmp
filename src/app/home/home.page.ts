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
    const requestParams = {
      policyRegime: 'gdpr',
      identity: {
        idv: '00000000T',
        dt: 'aaid',
        idt: 'device'
      },
      consent: {
        dc: 1,
        cd: 1,
        tg: 1,
        al: 1,
        sh: 0,
        re: 0
      }
    };
    DMP.sendRequests(requestParams)
      .then(success => {
        console.log(success);
      })
      .catch(err => { console.log('Dmp request error', err); });
  }

  getSegments() {
    DMP.getSegments()
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
      type: 'home'
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
