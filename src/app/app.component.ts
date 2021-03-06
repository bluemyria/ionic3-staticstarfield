import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private translateService: TranslateService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });
    this.initTranslate();
  }

  initTranslate() {

    this.translateService.addLangs(["en", "de"]);
    this.translateService.setDefaultLang('en');

    //let browserLang = translateService.getBrowserLang();
    //translateService.use(browserLang.match(/en|de/) ? browserLang : 'en');

    this.translateService.use('en');
  }
}
