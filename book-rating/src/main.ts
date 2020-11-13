import { enableProdMode, LOCALE_ID } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { getTranslations } from '@locl/core';
import { loadTranslations } from '@angular/localize';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// TODO: find a way to switch languages (eg. browser language or token in session storage)
const messages = '/assets/messages.de.json';
// const messages = '/assets/messages.en.json';

const localeId = 'de';


// VORHER
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

// NACHHER
// low-level API: loadTranslations from '@angular/localize';
// wird von getTranslations für uns bereits aufgerufen

getTranslations(messages).then(() => {
    platformBrowserDynamic([{ provide: LOCALE_ID, useValue: localeId }])
      .bootstrapModule(AppModule)
      .catch(err => console.error(err));
  }
);
