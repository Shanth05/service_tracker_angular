import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse, LoginModel } from '../models/API.Model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  login (obj:LoginModel) : Observable<APIResponse> {
    return this.http.post<APIResponse>(environment.API_URL + Constant.API_END_POINT.LOGIN,obj)
  }

}
