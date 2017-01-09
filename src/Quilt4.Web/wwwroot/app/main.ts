import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NavigationModule } from './navigation.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(NavigationModule);
