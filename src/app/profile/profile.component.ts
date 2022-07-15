import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateService } from '../services/update.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(@Optional() public dialogRef: MatDialogRef<ProfileComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any, private service: UpdateService) { }

  formdata:any;

  ngOnInit(): void {

    this.service.getuserdetail(this.data.uuid).subscribe((data: any) => {
      this.formdata = data[0];
    });
  }

  closemodal(){
    this.dialogRef.close();
  }

}
