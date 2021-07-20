import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Banco } from '../models/banco';
import { BANCO } from '../models/banco-constantes';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  subscription!: Subscription
 
  id: any;
  moeda = "1";
  sData = "";

  bancoForm!: FormGroup

  constructor(private appService: AppService,private formBuilder: FormBuilder, private route: ActivatedRoute, private _route: Router) { }

  iniciarForm(){
    this.bancoForm = this.formBuilder.group(BANCO)
  }

  ngOnInit(): void {
    this.iniciarForm();
    this.id = this.route.snapshot.paramMap.get('id');
    this.subscription = this.appService.getOneBanco(this.id).subscribe(res => {
     
      this.bancoForm.patchValue({
        id: res.id,
        descricao: res.descricao,
        tipoConta: res.tipoConta,
        data: res.data,
        saldo: res.saldo,
        conta: res.conta,
        agencia: res.agencia,
        cpf: res.cpf,
        createdAt: res.createdAt,
        updatedAt: res.updatedAt,
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  alterar() {
    this.appService.update(this.id, this.bancoForm.value).subscribe(() => {
      alert("Conta Bancaria Alterada com Sucesso!!");
      this._route.navigate(['home'])
    });
  }

  cancelar() {
    this._route.navigate(['home']);
  }

  tipoconta(e: any) {
    this.bancoForm.value.tipoConta = e.target.value;
  }


  formatMoeda(e: any) {
    let val = e.target.value.replace(',', '.');
    val = val.replace('R$', '');
    this.bancoForm.value.saldo = parseFloat(val);
  }

  formatData(data: Date) {
    const d = new Date(data);
    return this.sData = Intl.DateTimeFormat('pt-BR').format(d);
  }

}
