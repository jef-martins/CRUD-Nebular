import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NbCardModule,
    NbIconModule,
    HttpClientModule,
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
