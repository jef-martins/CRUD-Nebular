import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../services/app.service';
import { Banco } from '../models/banco';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  subscription!: Subscription

  bancos!: Banco[];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.subscription = this.appService.getAllBanco().subscribe(res => {
      this.bancos = res;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  data(data: any){
    const d = new Date(data);
    return Intl.DateTimeFormat('pt-BR').format(d);
  }

  cpf(cpf: any) {
    cpf = cpf.replace(/[^\d]/g, "");

    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

    return cpf;
  }
}
