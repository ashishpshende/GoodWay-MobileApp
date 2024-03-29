import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { LocalStorageService } from './services/localStorage/local-storage.service';
import { KeywordConstants } from 'src/assets/constants/constants';
import { PlatformService } from './services/platformService/platform.service';
import { AuthorizationService } from './services/authorization/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    private platform: Platform,
    private router: Router,
    private authorizationService: AuthorizationService,

    private storage: Storage,
    private localStorageService: LocalStorageService,
    private platFormService: PlatformService,
    private translate: TranslateService
  ) {

    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
  async ngOnInit() {
    await this.storage.create();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.localStorageService.LoadStoredPreference(succsee => {
        console.log("App Initilization: ", this.localStorageService.StoredPreference);
        if (this.localStorageService.StoredPreference.LoggedInStatus) {        
          this.authorizationService.loggedInUser =this.localStorageService.StoredPreference.LoggedInUser;
          this.router.navigate(["/home/dashboard"]);
        }
        else {
          this.router.navigate(["/login"]);
        }
      });
    });
  }
}
