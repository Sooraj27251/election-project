import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropDownService {
  baseUrl = 'http://localhost/electionproject';

  constructor(private http:HttpClient) { }

  getDistrict(){
    
      return this.http.get(`${this.baseUrl}/district.php`);
    
  }

  
  getConstituency(search:any){
    
    return this.http.post(`${this.baseUrl}/getconstituency.php`, { data: search })
  
}

}
