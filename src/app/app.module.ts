import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { AppComponent } from './app.component';
import { DockingLayoutModule } from 'smart-webcomponents-angular/dockinglayout';
import { GridModule } from 'smart-webcomponents-angular/grid';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
    BrowserModule, CommonModule, DockingLayoutModule, GridModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }