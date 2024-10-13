import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Constant } from '../constant/Constant';
import { Observable } from 'rxjs';
import { APIResponse, Department } from '../models/API.Model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }

  getALLDept () : Observable<APIResponse> {
    return this.http.get<APIResponse>(environment.API_URL + Constant.API_END_PONT.GET_DEPARTMENT)
  }

  createNewDept (obj:Department) : Observable<APIResponse> {
    return this.http.post<APIResponse>(environment.API_URL + Constant.API_END_PONT.CREATE_DEPARTMENT,obj)
  }

  updateDept (obj:Department) : Observable<APIResponse> {
    return this.http.put<APIResponse>(environment.API_URL + Constant.API_END_PONT.UPDATE_DEPARTMENT,obj)
  }

  deleteDept (id:number): Observable<APIResponse> {
    return this.http.delete<APIResponse>(environment.API_URL + Constant.API_END_PONT.GET_DEPARTMENT + id)
  }
}
