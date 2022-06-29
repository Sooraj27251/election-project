import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { range } from 'rxjs';
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


  constructor(private fb: FormBuilder, private registrationService: RegistrationService) {
   }

  ngOnInit(): void {

    this.registrationForm = this.fb.group({
      fname:[''],
      mname:[''],
      lname:[''],
      gender:[''],
      age:['',range(0,999)],
      caste:[''],
      occupation:[''],
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

  onSubmit(registration:FormGroup){
    this.issubmit= true;
    console.log(registration);
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
