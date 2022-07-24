import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteService } from '../services/delete.service';

@Component({
  selector: 'app-delete-comp',
  templateUrl: './delete-comp.component.html',
  styleUrls: ['./delete-comp.component.css']
})
export class DeleteCompComponent implements OnInit {

  constructor(@Optional() public dialogRef: MatDialogRef<DeleteCompComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,private service:DeleteService) { }

  issuccess:boolean =false;

  ngOnInit(): void {
  
  }

  deleterecord(){
    this.service.deleteuser(this.data).subscribe(data=>{
      this.issuccess = true;
    })
  }

  closemodal(){
    this.dialogRef.close();
  }
}
