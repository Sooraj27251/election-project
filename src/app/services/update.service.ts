import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http: HttpClient) {}

  getuserdetail(search:any) {
    return this.http.post(`${baseUrl}/getuserdetails.php`, { data: search })
  }
}
