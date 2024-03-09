import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { HttpErrorResponse } from '@angular/common/http';
import { create_university } from '../../../contracts/create_university';


@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  //universite ile ilgili ekle sil güncelle alanı
  constructor(private httpClientService:HttpClientService) { }

  create(university:create_university ,successCallBack?:any,errorCallBack?:any){
    this.httpClientService.post({
      controller:"university"
    },university).subscribe(result=>{
      successCallBack();
    
    },(errorResponse:HttpErrorResponse)=>{
      const _error :Array<{key:string,value:Array<string>}> =errorResponse.error;
      let message="";
      _error.forEach((v,index)=>{
        v.value.forEach((_v,_index)=>{
          message+=`${_v}<br>`;
        });
      });
      errorCallBack(message);
    });
  }

}
