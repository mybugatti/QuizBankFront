import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { HttpClientService } from '../../../services/common/http-client.service';
import { University } from '../../../contracts/university';

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
    this.showSpinner(SpinnerType.BallAtom);

    this.httpClientService.get<University[]>({
      controller: "university"
    }).subscribe(data => console.log(data));

    /*this.httpClientService.post({
      controller: "university"
    }, {
      universityName: "Ankuzef Aof",
      universityDescription: "bilinmeyen Üni"
    }).subscribe();*/

    /*this.httpClientService.put({

      controller: "university"
    }, {

      id: "2848731F-A119-4EF0-B28F-08DC3D45FDDB",
      universityName: "Ankuzef Aof",
      universityDescription: "bilnen Üni"

    }).subscribe();*/

    /*this.httpClientService.delete({

      controller: "university"
    }, "e7a1d336-6da4-4680-b290-08dc3d45fddb").subscribe();*/

  }

}
