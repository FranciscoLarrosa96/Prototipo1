import { ApplicationConfig, inject, provideEnvironmentInitializer } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SplashService } from './shared/splash-service.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withFetch()),
  provideEnvironmentInitializer(() => inject(SplashService)),
  provideAnimationsAsync(), provideAnimationsAsync()]
};