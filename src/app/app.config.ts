import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientJsonpModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(
    routes,
  withViewTransitions({
    skipInitialTransition: true,
  }),
),
importProvidersFrom(
  HttpClientJsonpModule,
),]
};
