import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RelativeService {

  baseUrl = 'http://localhost/electionproject';

  constructor(private http: HttpClient) {}

  addRelative(uuid:any,relative:any) {
    console.log(relative);
    return this.http.post(`${this.baseUrl}/addrelative.php`, { uuid:uuid,data: relative })
  }

  getRelative(uuid:any){
    return this.http.post(`${this.baseUrl}/getrelative.php`, { data: uuid })
  }
}
