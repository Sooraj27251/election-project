import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  constructor(public datepipe: DatePipe) { }

  fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  fileExtension = '.xlsx';

  mapobject:any = [{}];
  public exportExcel(jsonData: any[]): void {

    for(let obj of jsonData){
      this.mapobject.push({
        'UUID':obj.uuid,
        'First Name':obj.fname,	
        'Fathers Name':obj.mname,	
        'Last Name':obj.lname,	
        'Husband Name':obj.hname,
        'Gender':obj.gender,	
        'Age':obj.age,	
        'Caste':obj.caste,	
        'Religion':obj.religion,
        'Occupation':obj.occupation,
        'District':obj.district,	
        'Constituency':obj.constituency,	
        'Village':obj.village,	
        'Address':obj.address, 
        'Pollitically Active':obj.pollitical,	
        'Party':obj.party,	
        'About':obj.about,	
        'Election Prefrences': obj.election1+" "+obj.election2+" "+obj.election3+" "+obj.election4+" "+obj.election5

      });
    }

    let currentDateTime =this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.mapobject);
    const wb: XLSX.WorkBook = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    this.saveExcelFile(excelBuffer,"Search Data - "+currentDateTime);
  }

  private saveExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {type: this.fileType});
    FileSaver.saveAs(data, fileName + this.fileExtension);
  }
}
