import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.state';
import { map } from 'rxjs/operators';
import { StepsBarService } from './steps-bar.service';

@Component({
  selector: 'app-steps-bar',
  templateUrl: './steps-bar.component.html',
  styleUrls: ['./steps-bar.component.css'],
})
export class StepsBarComponent implements OnInit {

  currentStep : string = 'client';

  constructor(private router: Router, private store: Store<{app: IAppState}>, private stepBarService : StepsBarService) { 
  }
  ngOnInit(): void {
  }
  get stepSelected(): string{
    return this.stepBarService.stepBarData.stepSelected;
  }

  getColor(route: string): string{
    return this.stepSelected === route ? '#673ab7' : 'black';
  }
  
  getBackgroundColor(route: string): string{
    return this.stepSelected === route ? '#d7c0ff' : 'white';
  }
}
