import { Client } from './../client.model';
import { IAppState, setClient } from './../../../../store/app.state';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from "rxjs/operators";
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { StepsBarService } from 'src/app/template/steps-bar/steps-bar.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<{app: IAppState}>, stepService: StepsBarService) {
    stepService.stepBarData = {
      stepSelected: 'client'
    }
  }
  
  form: FormGroup = this.formBuilder.group({
    name: [null, [Validators.required]],
    cnpj: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
  });

  cnpj= ""
  email= ""
  name= ""

  client$ = this.store.select('app').pipe(
    map(e => e.client)
  )

  ngOnInit(): void {
    this.client$.subscribe( (val) =>{
      this.name = val.name;
      this.email = val.email;
      this.cnpj = val.cnpj;
    });
  }

  navigateToProducts(){
    this.store.dispatch(setClient({payload: this.form.value}))
    this.router.navigate(['/budget/create/products'])
  }

}
