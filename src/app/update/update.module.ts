import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateComponent } from './update.component';
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbFormFieldModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    UpdateComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbInputModule,
    NbFormFieldModule,
    NbIconModule,
    NbDatepickerModule,
    ReactiveFormsModule,
    NbSelectModule,
    HttpClientModule,
    NbButtonModule,
  ],
  exports:[
    UpdateComponent
  ]
})
export class UpdateModule { }
