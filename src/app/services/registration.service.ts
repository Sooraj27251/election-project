import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) {}

  register(login: any) {
    return this.http.post(`${baseUrl}/registration.php`, { data: login })
  }

  update(login: any) {
    return this.http.post(`${baseUrl}/updaterecord.php`, { data: login })
  }
}
