import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetComponent } from './views/budget/budget.component';
import { ClientComponent } from './components/budget/create/client/client.component';
import { ProductsComponent } from './components/budget/create/products/products.component';
import { ValidationComponent } from './components/budget/create/validation/validation.component';

const routes: Routes = [
  {
    path: "",
    component: BudgetComponent
  },
  {
    path: "budget",
    component: BudgetComponent
  },
  {
    path: "budget/create",
    component: BudgetComponent
  },
  {
    path: "budget/create/client",
    component: ClientComponent
  },
  {
    path: "budget/create/products",
    component: ProductsComponent
  },
  {
    path: "budget/create/validation",
    component: ValidationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
