import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  baseUrl = 'http://localhost/electionproject';

  constructor(private http: HttpClient) {}

  deleteuser(search:any) {
    return this.http.post(`${this.baseUrl}/deleterecord.php`, { data: search })
  }
}
