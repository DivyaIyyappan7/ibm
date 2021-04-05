import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [RootComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],bootstrap: [RootComponent]
})
export class AppModule { }
