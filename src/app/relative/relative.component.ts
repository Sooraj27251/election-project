import { ChangeDetectorRef, Component, Inject, OnInit, Optional, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddRelativeComponent } from '../add-relative/add-relative.component';
import { SearchComponent } from '../search/search.component';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-relative',
  templateUrl: './relative.component.html',
  styleUrls: ['./relative.component.css']
})
export class RelativeComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;


  constructor(@Optional() public dialogRef: MatDialogRef<RelativeComponent>,
  @Inject(MAT_DIALOG_DATA) public original: any,public dialog: MatDialog,private service: SearchService, private fb: FormBuilder, private cd: ChangeDetectorRef) { }

  search:FormGroup;
  searchResult: any;
  showTable: boolean = false;
  dataSource: any;
  ResultNotFound: boolean = false;
  constituencies: Array<String> = [];

  displayedColumns: string[] = ['sr', 'uuid', 'name', 'village', 'action'];



  ngOnInit(): void {

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
      pollitical: ['']
    })
  }

  onSubmit(search: FormGroup) {
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

  closeDailog(){
    this.dialogRef.close();
  }
  
  clearTable(): void {
    this.showTable = false;
  }

  addRelative(uuid:any): void {
    const addRelativeRef = this.dialog.open(AddRelativeComponent, {
      width: '50%',
      data:{ouuid:this.original.uuid,nuuid:uuid}
    });

    addRelativeRef.afterClosed().subscribe(result => {
      console.log('add relative dailog close');
    })
  }
}
