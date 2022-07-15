import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  baseUrl = 'http://localhost/electionproject';

  constructor(private http: HttpClient) {}

  register(login: any) {
    return this.http.post(`${this.baseUrl}/registration.php`, { data: login })
  }

  update(login: any) {
    return this.http.post(`${this.baseUrl}/updaterecord.php`, { data: login })
  }
}
