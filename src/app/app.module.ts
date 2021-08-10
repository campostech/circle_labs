import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatCardModule } from  '@angular/material/card';
import { MatButtonModule } from  '@angular/material/button';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table' 
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider'; 
import { BudgetComponent } from './views/budget/budget.component';
import { ClientComponent } from './components/budget/create/client/client.component';
import { ProductsComponent } from './components/budget/create/products/products.component';
import { ValidationComponent } from './components/budget/create/validation/validation.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.state';
import { NgxMaskModule } from 'ngx-mask';
import { StepsBarComponent } from './template/steps-bar/steps-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    BudgetComponent,
    ClientComponent,
    ProductsComponent,
    ValidationComponent,
    StepsBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    StoreModule.forRoot({ app: appReducer }),
    ReactiveFormsModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
