import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DatashareService } from 'src/app/shared/datashare.service';

@Component({
  selector: 'app-skin-specialist',
  templateUrl: './skin-specialist.component.html',
  styleUrls: ['./skin-specialist.component.scss'],
})
export class SkinSpecialistComponent {
  @ViewChild('opendialog') opendialog: TemplateRef<any>;
  dialogdata: FormGroup;

  constructor(private dialog: MatDialog , private dataService:DatashareService) {
    this.dataService.dataInSubject.next(true)
  }

  ngOnInit() {
    this.dialogdata=new FormGroup({
      name:new FormControl('',Validators.required),
      phone:new FormControl('',Validators.required),
      date:new FormControl('',Validators.required)
    })
    }
  opendilaog() {
    this.dialog.open(this.opendialog, {
      width: '400',
    });
  }
  close() {
    //this.opendialog.close()
  }
  submit() {
    console.log(this.dialogdata.value);
    
    
  
   
  

  }
}
