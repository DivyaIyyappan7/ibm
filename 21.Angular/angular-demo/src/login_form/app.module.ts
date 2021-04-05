import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { RootComponent } from './root/root.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent, InvoiceComponent, RootComponent],
  imports: [
    FormsModule,
    BrowserModule
  ],bootstrap: [RootComponent]
})
export class AppModule { }
