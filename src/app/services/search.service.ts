import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseUrl = 'http://localhost/electionproject';

  constructor(private http: HttpClient) {}

  search(search:any) {
    return this.http.post(`${this.baseUrl}/search.php`, { data: search })
  }
}
