import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  getDashBoardData(search:any){
    
      return this.http.post(`${baseUrl}/dashboard.php`, { data: search })
    
  }

  getVillageData(search:any){
    
    return this.http.post(`${baseUrl}/getvillagebyconstituency.php`, { data: search })
  
}
  getConstituency(){
    return this.http.get(`${baseUrl}/constituency.php`)
  }

  getGenderDashboard(gender:any){
    return this.http.post(`${baseUrl}/genderdashboard.php`, { data: gender })
  }

  getCasteDashboard(caste:any){
    return this.http.post(`${baseUrl}/castedashboard.php`, { data: caste })
  }
}
