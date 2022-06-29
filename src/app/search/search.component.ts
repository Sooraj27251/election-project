import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service:SearchService, private fb:FormBuilder) { }

  search:FormGroup;
  searchResult:any;

  ngOnInit(): void {
    
    this.search = this.fb.group({
      name:['']
    });
      
  }

  onSubmit(search:FormGroup){
    this.service.search().subscribe((data:any)=>{
      this.searchResult = data;
    })
  }

}
