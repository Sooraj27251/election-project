import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  baseUrl = 'http://localhost/electionproject';

  constructor(private http: HttpClient) {}

  getuserdetail(search:any) {
    return this.http.post(`${this.baseUrl}/getuserdetails.php`, { data: search })
  }
}
