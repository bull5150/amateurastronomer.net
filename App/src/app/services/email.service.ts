import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { email } from 'src/app/models/email_models';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private http: HttpClient) { }

  public postEmail(email: email)
  {
    return this.http.post('api/email', email, {responseType: 'text'});
  }
}
