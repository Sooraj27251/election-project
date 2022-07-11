import { Component, OnInit, ViewChild,ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchService } from '../services/search.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private service:SearchService, private fb:FormBuilder, private dashboardservice:DashboardService,private cd: ChangeDetectorRef) { }

  search:FormGroup;
  searchResult:any;
  showTable:boolean = false;
  dataSource:any;
  ResultNotFound:boolean = false;
  constituencies: Array<String> = [];

  displayedColumns: string[] = ['uuid', 'name','gender',
  'age','caste','occupation','constituency','village','address','pollitical','party','electionPrefrences'];

  
  ngOnInit(): void {
    this.dashboardservice.getConstituency().subscribe((data: any) => {
      for (let obj of data) {
        for (let key in obj) {
          this.constituencies.push(obj[key]);
        }
      }
    });
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
        this.searchResult = data;
        this.dataSource = new MatTableDataSource(this.searchResult);
        this.showTable = true;
        this.cd.detectChanges();
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  clearTable():void{
    this.showTable = false;
  }


}
