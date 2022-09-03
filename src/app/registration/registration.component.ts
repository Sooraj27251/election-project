import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { range } from 'rxjs';
import { DropDownService } from '../services/drop-down.service';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm:FormGroup;
  issubmit:boolean = false;
  issuccess:boolean = false;
  districts: Array<String> = [];
  constituencies: Array<String> = [];
  district:any = '';

  constructor(private fb: FormBuilder, private registrationService: RegistrationService,private dropservice:DropDownService) {
   }

  ngOnInit(): void {

    this.dropservice.getDistrict().subscribe((data: any) => {
      for (let obj of data) {
        for (let key in obj) {
          this.districts.push(obj[key]);
        }
      }
    });


    this.registrationForm = this.fb.group({
      fname:['',Validators.required],
      mname:['' ],
      lname:['',Validators.required],
      hname:[''],
      gender:[''],
      age:['',range(0,999)],
      caste:[''],
      occupation:[''],
      district:[''],
      constituency:[''],
      village:[''],
      address:[''],
      pollitical:[''],
      about:[''],
      polliticalParty:[''],
      election1:[''],
      election2:[''],
      election3:[''],
      election4:[''],
      election5:[''],
    })
  }


  get form(): { [key: string]: AbstractControl } {
    return this.registrationForm.controls;
  }

  getData(){
    this.constituencies = [];
    this.dropservice.getConstituency(this.district).subscribe((data:any)=>{
      for (let obj of data) {
        for (let key in obj) {
          this.constituencies.push(obj[key]);
        }
      }
    })
  }
  onSubmit(registration:FormGroup){
    this.issubmit= true;
    this.constituencies = [];
    if(this.registrationForm.valid){
      this.registrationService.register(registration.value).subscribe((data:any)=>{
        if(data.result == true){
            this.issuccess = true;
            this.registrationForm.reset();
            this.issubmit = false;
        }
      }) 
    }
    
  }

}
