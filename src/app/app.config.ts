import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'; //i18n config
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

export function createTranslateLoader(http: HttpClient) { //i18n config
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
        provideHttpClient(
          withInterceptorsFromDi()
        ),
    TranslateModule.forRoot({ //i18n config
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }).providers!
  ]
};
