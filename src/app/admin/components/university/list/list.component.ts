import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { List_University } from '../create/list_university';
import { UniversityService } from '../../../../services/common/models/university.service';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'] // styleUrl yerine styleUrls kullanılmalıdır
})
export class ListComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private universityService: UniversityService, private alertifyService: AlertifyService) {
    super(spinner)
  }

  displayedColumns: string[] = ['UniversityName', 'UniversityDescription', 'CreatedDate', 'UpdateDate', 'Delete'];
  dataSource: MatTableDataSource<List_University> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  async getUniversities() {
    this.showSpinner(SpinnerType.BallScaleMultiple);
    const allUniversity: { totalCount: number; university: List_University[] } = await this.universityService.read(
      this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5,
      () => this.hideSpinner(SpinnerType.BallScaleMultiple),
      errorMessage => this.alertifyService.message(errorMessage,
        {
          dismissOther: true,
          messageType: MessageType.Error,
          position: Position.TopRight
        }));
    console.log('Tüm üniversiteler:', allUniversity);
    this.dataSource = new MatTableDataSource<List_University>(allUniversity.university);
    this.paginator.length = allUniversity.totalCount;

  }
  async ngOnInit() {
    await this.getUniversities();
  }
  async pageChanged() {
    await this.getUniversities();
  }
}