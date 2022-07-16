import { Component, Inject, OnInit, Optional } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { range } from 'rxjs';
import { DropDownService } from '../services/drop-down.service';
import { RegistrationService } from '../services/registration.service';
import { UpdateService } from '../services/update.service';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.css']
})
export class UpdateModalComponent implements OnInit {

  constructor(@Optional() public dialogRef: MatDialogRef<UpdateModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private service: UpdateService, private fb: FormBuilder, private registrationService: RegistrationService, private dropservice: DropDownService) {
  }

  registrationForm: FormGroup;
  issubmit: boolean = false;
  issuccess: boolean = false;
  districts: Array<String> = [];
  constituencies: Array<String> = [];
  genderlist: Array<string> = ['MALE', 'FEMALE', 'OTHER'];
  partylist: any = [
    {sf:'',ff:'---Select Party---'},
    { sf: 'BJP', ff: 'Bharatiya Janata Party (BJP)' },
    { sf: 'SS', ff: 'Shiv Sena' },
    { sf: 'NCP', ff: 'Nationalist Congress Party (NCP)' },
    { sf: 'INC', ff: 'Indian National Congress (INC)' },
    { sf: 'SP', ff: 'Samajwadi Party (SP)' },
    { sf: 'MNS', ff: 'Maharashtra Navnirman Sena (MNS)' },
    { sf: 'PWP', ff: 'Peasants and Workers Party of India' },
    { sf: 'CPI', ff: 'Communist Party of India (CPI)' },
    { sf: 'MIM', ff: 'All India Majlis-e-Ittehadul Muslimeen' },
    { sf: 'CP', ff: 'Communist Party of India (Marxist)' },
    { sf: 'RPI', ff: 'Republican Party of India' },
    { sf: 'AAP', ff: 'Aam Adami Party' }
  ];
  district: any = '';
  formdata: any;
  ngOnInit(): void {

    this.service.getuserdetail(this.data.uuid).subscribe((data: any) => {
      if(data[0].pollitical == 'NO'){
        data[0].pollitical = false;
      }
      this.formdata = data[0];
    });

    this.dropservice.getDistrict().subscribe((data: any) => {
      for (let obj of data) {
        for (let key in obj) {
          this.districts.push(obj[key]);
        }
      }
    });


    this.registrationForm = this.fb.group({
      fname: ['', Validators.required],
      mname: [''],
      lname: ['', Validators.required],
      gender: [''],
      age: ['', range(0, 999)],
      caste: [''],
      occupation: [''],
      district: [''],
      constituency: [''],
      village: [''],
      address: [''],
      pollitical: [''],
      about: [''],
      polliticalParty: [''],
      election1: [''],
      election2: [''],
      election3: [''],
      election4: [''],
      election5: [''],
      uuid:[]
    })

  }

  get form(): { [key: string]: AbstractControl } {
    return this.registrationForm.controls;
  }

  getData() {
    this.constituencies = [];
    this.dropservice.getConstituency(this.registrationForm.value.district).subscribe((data: any) => {
      for (let obj of data) {
        for (let key in obj) {
          this.constituencies.push(obj[key]);
        }
      }
    })
  }

  closemodal(){
    this.dialogRef.close();
  }
  onSubmit(registration: FormGroup) {
    this.issubmit = true;
    this.constituencies = [];
    this.registrationForm.value.uuid = this.data.uuid;
        if (this.registrationForm.valid) {
      console.log(this.registrationForm.value)
      this.registrationService.update(registration.value).subscribe((data: any) => {
        if (data.result == true) {
          this.issuccess = true;
          this.issubmit = false;
        }
      })
    }

  }

}
