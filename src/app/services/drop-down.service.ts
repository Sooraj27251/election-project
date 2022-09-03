import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../constants';
@Injectable({
  providedIn: 'root'
})
export class DropDownService {

  constructor(private http:HttpClient) { }

  getDistrict(){
    
      return this.http.get(`${baseUrl}/district.php`);
    
  }

  
  getConstituency(search:any){
    
    return this.http.post(`${baseUrl}/getconstituency.php`, { data: search })
  
}

}
