import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { map } from 'rxjs/operators';
import { baseUrl } from '../constants';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) {}

  authenticate(login: Login) {
    return this.http.post(`${baseUrl}/login.php`, { data: login })
  }
}
