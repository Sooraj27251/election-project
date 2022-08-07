import { Component, Inject, OnInit, Optional } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Relative } from '../models/relative';
import { RelativeService } from '../services/relative.service';
import { UpdateService } from '../services/update.service';

@Component({
  selector: 'app-add-relative',
  templateUrl: './add-relative.component.html',
  styleUrls: ['./add-relative.component.css']
})
export class AddRelativeComponent implements OnInit {

  constructor(@Optional() public dialogRef: MatDialogRef<AddRelativeComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any, private fb:FormBuilder,private updtservice:UpdateService,private relativeservice:RelativeService) { }

  form:FormGroup;
  selfName:any;
  relativeName:any;
  relativesArray:Array<Relative> = [];
  relativeObj:Relative;

  ngOnInit(): void {

    this.updtservice.getuserdetail(this.data.ouuid).subscribe((data:any)=>{
      this.selfName = data[0].fname+" "+data[0].lname;
    });

    this.updtservice.getuserdetail(this.data.nuuid).subscribe((data:any)=>{
      this.relativeName = data[0].fname+" "+data[0].lname;
    });

   
    this.relativeservice.getRelative(this.data.ouuid).subscribe((data:any)=>{
      this.relativesArray = JSON.parse(data[0].relatives);
    })    

    this.form = this.fb.group({
      relation:['',Validators.required]
    })
  }

  get myform(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  closeDailog(){
    this.dialogRef.close();
  }

  onSubmit(form:any){


    this.relativesArray.push({uuid:this.data.nuuid,relatives:this.form.value.relation,name:this.relativeName})
    this.relativeservice.addRelative(this.data.ouuid, JSON.stringify(this.relativesArray)).subscribe(data=>{
      console.log(data);
    })
  }
}
