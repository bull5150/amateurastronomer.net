import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { creds } from '../models/admin_models';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  public getAdminCreds()
  {
    return this.http.get<creds>('api/admin');
  }

}
