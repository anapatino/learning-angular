import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddComponent } from './add/add.component';
import { NavegationComponent } from './navegation/navegation.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, AddComponent, NavegationComponent, SubtractionComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
