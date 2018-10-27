import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { OwfApi } from './app/library/owf-api';
declare var $: any;
declare var OWF: any;
declare var Ozone: any;

if (environment.production) {
  enableProdMode();
}

// add document/OWF ready check state
$(document).ready(function() {
  OWF.ready(function() {
    let owfapi = new OwfApi();
    owfapi.initialize();

    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));
  });
});
