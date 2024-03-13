import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { HttpErrorResponse } from '@angular/common/http';

import { List_University } from '../../../admin/components/university/create/list_university';
import { Create_University } from '../../../contracts/create_university';
import { firstValueFrom, lastValueFrom } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  //universite ile ilgili ekle sil güncelle alanı
  constructor(private httpClientService: HttpClientService) { }

  create(university: Create_University, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) {
    this.httpClientService.post({
      controller: "university"
    }, university).subscribe(result => {
      successCallBack();

    }, (errorResponse: HttpErrorResponse) => {
      const _error: Array<{ key: string, value: Array<string> }> = errorResponse.error;
      let message = "";
      _error.forEach((v, index) => {
        v.value.forEach((_v, _index) => {
          message += `${_v}<br>`;
        });
      });
      errorCallBack(message);
    });
  }

  async read(page: number = 0, size: number = 5, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void): Promise<{ totalCount: number; university: List_University[] }> {
    try {
      const observable = this.httpClientService.get<{ totalCount: number; university: List_University[] }>({
        controller: "university",
        queryString: `page=${page}&size=${size}`
      });
  
      const data = await firstValueFrom(observable);
  
      if (successCallBack) {
        successCallBack();
      }
      return data;
    
    } catch (errorResponse) {
      if (errorCallBack) {
        errorCallBack(errorResponse.message);
      }
      throw errorResponse;
    }
  }
}
