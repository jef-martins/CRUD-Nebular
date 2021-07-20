import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BANCO } from '../models/banco-constantes';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  subscription!: Subscription

  bancoForm!: FormGroup

  constructor(
    private appService: AppService, 
    private _route: Router,
    private formBuilder: FormBuilder
  ){}

  iniciarForm(){
    this.bancoForm = this.formBuilder.group(BANCO)
  }

  ngOnInit(): void {
    this.iniciarForm();
    this.bancoForm.get('data')?.valueChanges.pipe().subscribe(form => {

      //this.bancoForm.get('data')?.setValue(Intl.DateTimeFormat('pt-BR').format(form));

      /*this.bancoForm.patchValue({
        'data': Intl.DateTimeFormat('pt-BR').format(form)
      });*/
      this.bancoForm.value.data = Intl.DateTimeFormat('pt-BR').format(form);

    });
    /*
    this.bancoForm.get('cpf')?.valueChanges.pipe().subscribe(form => {

      switch(form.length){
        case 3:
          form = form.replace(/(\d{3})/, "$1.");
          break;
        case 6:
          form = form.replace(/(\d{3})(\d{3})/, "$1.$2.");
          break;
        case 9:
          form = form.replace(/(\d{3})(\d{3})(\d{3})/, "$1.$2.$3-");
          break;
        case 11:
          form = form.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
          break;
        default:
          if(form.length > 11)
            alert("Cpf Invalido")
          break;
      }
      
      this.bancoForm.value.cpf = form;
      console.log(form)
    });
    */
  }

  ngOnDestroy():void {
    if(this.subscription)
      this.subscription.unsubscribe()
}

  save(){
    this.subscription = this.appService.createBanco(this.bancoForm.value).subscribe(()=>this._route.navigate(['home']));
  }

  cancelar(){
    this._route.navigate(['home']);
  }

}
