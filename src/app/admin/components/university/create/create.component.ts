import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UniversityService } from '../../../../services/common/models/university.service';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';
import {Create_University } from '../../../../contracts/create_university';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private universityService: UniversityService, private alertify: AlertifyService) {
    super(spinner);
  }

  ngOnInit(): void {

  }
  @Output() createdUniversity:EventEmitter<Create_University> = new EventEmitter();

  create(txtName: HTMLInputElement, txtDescription: HTMLInputElement) {

    this.showSpinner(SpinnerType.BallAtom);

    const createUniversity: Create_University = new Create_University
    createUniversity.UniversityName = txtName.value;
    createUniversity.UniversityDescription = txtDescription.value;
    

    this.universityService.create(createUniversity, () => {
      this.hideSpinner(SpinnerType.BallAtom);
      this.alertify.message("Universite Başarıyla eklendi.", {
        dismissOther: true,
        messageType: MessageType.Success,
        position: Position.TopRight
      });
      this.createdUniversity.emit(createUniversity);
    }, errorMessage => {
      this.alertify.message(errorMessage,{
        dismissOther:true,
        messageType:MessageType.Error,
        position:Position.
        TopRight
      });
    });

  }

}
