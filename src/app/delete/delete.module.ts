import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './delete.component';
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbFormFieldModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DeleteComponent
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
    DeleteComponent
  ]
})
export class DeleteModule { }
