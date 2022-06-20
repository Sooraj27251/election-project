import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  baseUrl = 'http://localhost/electionproject';

  constructor(private http: HttpClient) {}

  authenticate(login: Login) {
    return this.http.post(`${this.baseUrl}/login.php`, { data: login })
  }
}
