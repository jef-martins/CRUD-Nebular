import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BANCO } from '../models/banco-constantes';
import { AppService } from '../services/app.service';
import { tap, debounceTime } from 'rxjs/operators'

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
      this.bancoForm.value.data = Intl.DateTimeFormat('pt-BR').format(form);
      //this.bancoForm.setValue({['data']}) --->>> pesquisar
    });
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
