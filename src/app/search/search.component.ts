import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service:SearchService) { }

  search:any;

  ngOnInit(): void {
      this.service.search().subscribe((data:any)=>{
        this.search = data;
      })
  }

}
