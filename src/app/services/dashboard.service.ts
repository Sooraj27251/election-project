import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseUrl = 'http://localhost/electionproject';

  constructor(private http:HttpClient) { }

  getDashBoardData(search:any){
    
      return this.http.post(`${this.baseUrl}/dashboard.php`, { data: search })
    
  }

  getConstituency(){
    return this.http.get(`${this.baseUrl}/constituency.php`)
  }

  getGenderDashboard(gender:any){
    return this.http.post(`${this.baseUrl}/genderdashboard.php`, { data: gender })
  }

  getCasteDashboard(caste:any){
    return this.http.post(`${this.baseUrl}/castedashboard.php`, { data: caste })
  }
}
