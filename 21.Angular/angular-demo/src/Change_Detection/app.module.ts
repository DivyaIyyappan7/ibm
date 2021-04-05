import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [RootComponent, CompAComponent, CompBComponent],
  imports: [
    FormsModule,BrowserModule
  ],bootstrap:[RootComponent]
})
export class AppModule { }
