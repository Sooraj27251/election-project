import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchService } from '../services/search.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from '../services/dashboard.service';
import { UpdateModalComponent } from '../update-modal/update-modal.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';
import { ExportService } from '../services/export.service';
import { DeleteCompComponent } from '../delete-comp/delete-comp.component';
import { RelativeComponent } from '../relative/relative.component';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;


  constructor(private exportservice: ExportService, public dialog: MatDialog, private service: SearchService, private fb: FormBuilder, private dashboardservice: DashboardService, private cd: ChangeDetectorRef) { }

  search: FormGroup;
  searchResult: any;
  showTable: boolean = false;
  dataSource: any;
  ResultNotFound: boolean = false;
  constituencies: Array<String> = [];

  displayedColumns: string[] = ['sr', 'uuid', 'name', 'gender',
    'age','religion', 'caste', 'occupation', 'constituency', 'village', 'address', 'pollitical', 'party', 'electionPrefrences', 'action'];


  ngOnInit(): void {
    this.dashboardservice.getConstituency().subscribe((data: any) => {
      for (let obj of data) {
        for (let key in obj) {
          this.constituencies.push(obj[key]);
        }
      }
    });
    this.search = this.fb.group({
      uuid: [''],
      fname: [''],
      mname: [''],
      lname: [''],
      fromAge: [''],
      toAge: [''],
      gender: [''],
      caste: [''],
      occupation: [''],
      constituency: [''],
      polliticalParty: [''],
      village: [''],
      pollitical: [''],
      religion:['']
    });

  }

  openDialog(uuid: any): void {
    const dialogRef = this.dialog.open(UpdateModalComponent, {
      width: '90%',
      data: { uuid: uuid }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  deleteDailog(uuid: any): void {
    const deletedailogref = this.dialog.open(DeleteCompComponent, {
      width: '50%',
      data: { uuid: uuid }
    });

    deletedailogref.afterClosed().subscribe(result => {
      console.log('delete dailog close');
    })
  }

  addRelative(uuid: any): void {
    const addRelativeRef = this.dialog.open(RelativeComponent, {
      width: '90%',
      data: { uuid: uuid }
    });

    addRelativeRef.afterClosed().subscribe(result => {
      console.log('add relative dailog close');
    })
  }

  openProfile(uuid: any): void {
    const dialogRef = this.dialog.open(ProfileComponent, {
      width: '90%',
      data: { uuid: uuid }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  exportdata() {
    this.exportservice.exportExcel(this.searchResult);
  }
  onSubmit(search: FormGroup) {
    console.log(search.value)
    this.ResultNotFound = false;
    this.showTable = false;
    this.service.search(search.value).subscribe((data: any) => {
      if (data == false) {
        this.ResultNotFound = true;
      } else {
        this.searchResult = data;
        this.dataSource = new MatTableDataSource(this.searchResult);
        this.showTable = true;
        this.cd.detectChanges();
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  clearTable(): void {
    this.showTable = false;
  }


}
