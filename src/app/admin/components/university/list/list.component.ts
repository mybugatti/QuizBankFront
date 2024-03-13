import { Component, OnInit, ViewChild, ChangeDetectorRef, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { List_University } from '../create/list_university';
import { UniversityService } from '../../../../services/common/models/university.service';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';
import { MatPaginator } from '@angular/material/paginator';

interface DataApi {id: string, name: string, year: string, color: string, panton_value: string}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'] // styleUrl yerine styleUrls kullanılmalıdır
})
export class ListComponent extends BaseComponent implements OnInit {

  // cd = inject(ChangeDetectorRef);

  constructor(spinner: NgxSpinnerService, private universityService: UniversityService, private alertifyService: AlertifyService) {
    super(spinner)
  }

  displayedColumns: string[] = ['UniversityName', 'UniversityDescription', 'CreatedDate', 'UpdateDate', 'Delete'];
  dataSource: MatTableDataSource<DataApi> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  async getUniversities() {
    this.showSpinner(SpinnerType.BallScaleMultiple);
    const allUniversity: any = await this.universityService.read(
      this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5,
      () => this.hideSpinner(SpinnerType.BallScaleMultiple),
      errorMessage => this.alertifyService.message(errorMessage,
        {
          dismissOther: true,
          messageType: MessageType.Error,
          position: Position.TopRight
        }));
        
    console.log('Tüm üniversiteler:', allUniversity.data);
    this.dataSource = new MatTableDataSource<DataApi>(allUniversity.data);
    this.paginator.length = allUniversity.data.length;

    console.log('OKAY---......', this.dataSource.data);
      // this.cd.detectChanges();
  }
  async ngOnInit() {
    // console.log('INIT.............')
    await this.getUniversities();
  }
  async pageChanged() {
    await this.getUniversities();
  }
}