//main entry point
// platformBrowserDynamic -> Angular library that will render the website. This will allow us to bootstrap or launch the app.
// It contains the client side code that processes templates (bindings, components, ...) and reflective dependency injection.
// Uses Just-in-Time compiler and make's application compile on client-side
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
