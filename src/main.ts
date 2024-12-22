import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers, // Spread the providers from appConfig
    provideRouter(routes), // Add the router providers
  ],
}).catch((err) => console.error(err));
