import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  addIndex:FormGroupName;
  detailsForm:FormGroup;
constructor(private fb :FormBuilder){}
ngOnInit(){
  this.detailsForm=this.fb.group({
     name:new FormControl(),
     email:new FormControl(),
     password:new FormControl(),
     address:new FormArray([]),
  })
}
 
 address():FormArray{
  return this.detailsForm.get('address') as  FormArray
 }
 newAddress():FormGroup{
   return new FormGroup({
    city:new FormControl(),
    country:new FormControl(),
   })
 }
 addnewaddress(){
  this.address().push(this.newAddress())
 }

 removeAddress(addIndex :any){
  this.address().removeAt(addIndex)
 }

submittedValues(){
    console.log(this.detailsForm.value)
}

//   empForm: FormGroup;

//   constructor(private fb: FormBuilder) {
//     this.empForm = this.fb.group({
//       employees: this.fb.array([]),
//       address:this.fb.array([])
//     });
//   }
//     address():FormArray{
//       return this.empForm.get('address') as FormArray
//     }
//   employees(): FormArray {
//     return this.empForm.get('employees') as FormArray;
//   }
//    newAddress():FormGroup{
//     return this.fb.group({
//       city:'',
//       province:'',
//     })
//    }
//   newEmployee(): FormGroup {
//     return this.fb.group({
//       firstName: '',
//       lastName: '',
//     });
//   }
//   addAddress(){
//     this.address().push(this.newAddress())
//   }
//   addEmployee() {
//     console.log('Adding a employee');
//     this.employees().push(this.newEmployee());
//   }
//   removeAddress(addindex:number){
//     this.address().removeAt(addindex)
//   }

//   removeEmployee(empIndex: number) {
//     this.employees().removeAt(empIndex);
//   }

//   onSubmit() {
//     console.log(this.empForm.value);
//   }
// }

// export class country {
//   id: string;
//   name: string;

//   constructor(id: string, name: string) {
//     this.id = id;
//     this.name = name;
//   }
}
