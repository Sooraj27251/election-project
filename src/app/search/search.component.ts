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
  showTable:boolean = false;
  ResultNotFound:boolean = false;

  ngOnInit(): void {
    
    this.search = this.fb.group({
      uuid:[''],
      fname:[''],
      mname:[''],
      lname:[''],
      fromAge:[''],
      toAge:[''],
      gender:[''],
      caste:[''],
      occupation:[''],
      constituency:[''],
      polliticalParty:[''],
      village:[''],
      pollitical:['']
    });
      
  }

  onSubmit(search:FormGroup){
    console.log(search.value)
    this.ResultNotFound = false;
    this.showTable = false;
    this.service.search(search.value).subscribe((data:any)=>{
      if(data==false){
        this.ResultNotFound = true;
      }else{
        this.showTable = true;
        this.searchResult = data;
      }
    })
  }

  clearTable():void{
    this.showTable = false;
  }
}
