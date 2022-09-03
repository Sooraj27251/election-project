import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http: HttpClient) {}

  deleteuser(search:any) {
    return this.http.post(`${baseUrl}/deleterecord.php`, { data: search })
  }
}
