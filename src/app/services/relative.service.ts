import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class RelativeService {

  constructor(private http: HttpClient) {}

  addRelative(uuid:any,relative:any) {
    console.log(relative);
    return this.http.post(`${baseUrl}/addrelative.php`, { uuid:uuid,data: relative })
  }

  getRelative(uuid:any){
    return this.http.post(`${baseUrl}/getrelative.php`, { data: uuid })
  }
}
