import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrl: './university.component.css'
})
export class UniversityComponent extends BaseComponent implements OnInit {

  constructor(spinner:NgxSpinnerService){
    super(spinner);
   }
  ngOnInit() : void {
    this.showSpinner(SpinnerType.BallScaleMultiple);
  }

}
