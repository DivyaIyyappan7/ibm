import { enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import AppModule from "./app/app.module";
// import AppModule from "./01_databinging/app.module";
// import AppModule from "./02_databinging/app.module";
// import {AppModule} from "./03_databinding/app.module";
// import {AppModule} from "./doubts/app.module";
// import { AppModule } from "./practice/app.module";
// import { AppModule } from "./Tags_Directories/app.module";
// import { AppModule } from "./practice02/app.module";
// import { AppModule } from "./Badges/app.module";
// import { AppModule } from "./08_pipes/app.module";
// import { AppModule } from "./09_forms/app.module";
// import { AppModule } from "./login_form/app.module"
// import {AppModule} from "./fetch/app.module";
// import {AppModule} from "./Http/app.module";
// import {AppModule} from "./Change_Detection/app.module"
// import AppModule from "./14_spa/app.module"
// import AppModule from "./15_books/app.module"
// import {AppModule} from "./16_nested/app.module"
import {AppModule} from "./17-ng-bootstrap/app.module"



import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
