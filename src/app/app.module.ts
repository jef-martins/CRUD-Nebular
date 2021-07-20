import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbActionsModule, NbDatepickerModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomeModule } from './home/home.module';
import { AddModule } from './add/add.module';
import { UpdateModule } from './update/update.module';
import { DeleteModule } from './delete/delete.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HomeModule,
    AddModule,
    UpdateModule, 
    DeleteModule,
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbActionsModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
