import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { HttpClientService } from '../../../services/common/http-client.service';
import { ListComponent } from './list/list.component';
import { Create_University } from '../../../contracts/create_university';


@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrl: './university.component.css'
})
export class UniversityComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner);
  }
  ngOnInit(): void {


  }
  @ViewChild(ListComponent)listComponents :ListComponent
  createdUniversity(createdUniversity: Create_University){

  }
}
