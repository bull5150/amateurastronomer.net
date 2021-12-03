import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { onstipe } from '../models/onstipe_models';

@Injectable({
  providedIn: 'root'
})
export class OnstipeService {

  constructor(private http: HttpClient) { }

  public getStipe()
  {
    return this.http.get<onstipe>('https://onstipe.com/web/api/json/2211?key=YOURKEYHERE&count=15');
  }
}
