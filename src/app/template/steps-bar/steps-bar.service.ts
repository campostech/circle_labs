import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StepsBarData } from './step-bar-data.model';

@Injectable({
  providedIn: 'root'
})
export class StepsBarService {

  private _stepBarData = new BehaviorSubject<StepsBarData>({
    stepSelected: 'client',
  })

  constructor() { }

  get stepBarData(): StepsBarData {
    return this._stepBarData.value
  }

  set stepBarData(stepBarData: StepsBarData) {
    this._stepBarData.next(stepBarData)
  }
}
