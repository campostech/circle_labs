import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addProduct, dropProduct, IAppState, removeProduct } from 'src/app/store/app.state';
import { map } from "rxjs/operators";
import { StepsBarService } from 'src/app/template/steps-bar/steps-bar.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  selected = 1;
  displayedColumns = ['id', 'name', 'quantity', 'action']


  products$ = this.store.select('app').pipe(
    map(e => e.products)
  )

  cart$ = this.store.select('app').pipe(
    map(e => e.cart)
  )

  constructor(private router: Router, private store: Store<{app: IAppState}>, stepService: StepsBarService) {
    stepService.stepBarData = {
      stepSelected: 'products'
    }
  }
  ngOnInit(): void {
    this.store.select('app').subscribe( (val) =>{
      if(val.client.cnpj == '' || val.client.email == '' || val.client.name == ''){
        this.router.navigate(['/budget/create/client'])
      }
    });
  }

  addProduct(id?: number){
    this.store.dispatch(addProduct({payload: id ?? this.selected}))
  }

  removeProduct(id: number){
    this.store.dispatch(removeProduct({payload: id}))
  }

  dropProduct(id: number){
    this.store.dispatch(dropProduct({payload: id}))
  }

  navigateToClient(){
    this.router.navigate(['/budget/create/client'])
  }

  navigateToValidation(){
    this.router.navigate(['/budget/create/validation'])
  }

}
