import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import AppComponent from './app.component';
import { CompCComponent } from '../Change_Detection/comp-c/comp-c.component';
import { CompDComponent } from '../Change_Detection/comp-d/comp-d.component';
import { CompEComponent } from '../Change_Detection/comp-e/comp-e.component';
import { CompFComponent } from '../Change_Detection/comp-f/comp-f.component';

@NgModule({
    declarations: [AppComponent, CompCComponent, CompDComponent, CompEComponent, CompFComponent],
    imports: [
        BrowserModule
    ],
    bootstrap: [AppComponent]
})
export default class AppModule { }

