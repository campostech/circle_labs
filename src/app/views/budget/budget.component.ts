import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  constructor(private router: Router) {
    this.router.navigate(['budget/create/client']) 
  }

  ngOnInit(): void {
    
  }

}
