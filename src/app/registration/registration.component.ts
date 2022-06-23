import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm:FormGroup;
  issubmit:boolean = false;


  constructor(private fb: FormBuilder) {
   }

  ngOnInit(): void {

    this.registrationForm = this.fb.group({
      fname:['',Validators.required],
      mname:[''],
      lname:['',Validators.required],
      gender:['',Validators.required],
      age:['',Validators.required],
      caste:['',Validators.required],
      occupation:['',Validators.required],
      constituency:['',Validators.required],
      village:['',Validators.required],
      address:['',Validators.required],
      pollitical:[''],
    })
  }

  onSubmit(registration:any){
    this.issubmit= true;
      console.log(registration);
  }

}
