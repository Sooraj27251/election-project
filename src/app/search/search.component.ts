import { Component, OnInit, ViewChild,ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchService } from '../services/search.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { DashboardService } from '../services/dashboard.service';
import { UpdateModalComponent } from '../update-modal/update-modal.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;


  constructor(public dialog: MatDialog,private service:SearchService, private fb:FormBuilder, private dashboardservice:DashboardService,private cd: ChangeDetectorRef) { }

  search:FormGroup;
  searchResult:any;
  showTable:boolean = false;
  dataSource:any;
  ResultNotFound:boolean = false;
  constituencies: Array<String> = [];

  displayedColumns: string[] = ['sr','action','uuid', 'name','gender',
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

  openDialog(uuid:any): void {
    const dialogRef = this.dialog.open(UpdateModalComponent, {
      width: '90%',
      data: {uuid:uuid}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openProfile(uuid:any): void {
    const dialogRef = this.dialog.open(ProfileComponent, {
      width: '90%',
      data: {uuid:uuid}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
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
