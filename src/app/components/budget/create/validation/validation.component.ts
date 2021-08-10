import { resetAll } from './../../../../store/app.state';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.state';
import { map } from "rxjs/operators";
import { StepsBarService } from 'src/app/template/steps-bar/steps-bar.service';
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  constructor(private router: Router, private store: Store<{app: IAppState}>, stepService: StepsBarService, private snackBar: MatSnackBar) {
    stepService.stepBarData = {
      stepSelected: 'validation'
    }
  }
  displayedColumns = ['id', 'name', 'quantity']

  cart$ = this.store.select('app').pipe(
    map(e => e.cart)
  )

  client$ = this.store.select('app').pipe(
    map(e => e.client)
  )

  isInvalid: Boolean = false;

  ngOnInit(): void {
    this.store.select('app').subscribe( (val) =>{
      if(val.client.cnpj == '' || val.client.email == '' || val.client.name == ''){
        this.router.navigate(['/budget/create/client'])
      }else if(val.cart.length == 0){
        this.router.navigate(['/budget/create/products'])
      }else{
        this.isInvalid = false;
      }
    });
  }
  
  navigateToClient(){
    this.router.navigate(['/budget/create/products'])
  }

  saveBudget(){
    this.showMessage('Orçamento efetuado com sucesso!');
    this.store.dispatch(resetAll());
  }

  showMessage(msg: string){
    this.snackBar.open(msg,'',{
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }


}
