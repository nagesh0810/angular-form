import { Component, OnInit } from '@angular/core';
import { FormArrayName, FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-builderform',
  templateUrl: './builderform.component.html',
  styleUrls: ['./builderform.component.css']
})
export class BuilderformComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  regForm =this.fb.group({
    name:this.fb.control(null,[Validators.required,Validators.minLength(6)]),
    email: [null,Validators.required],
    mobile:[null,Validators.required],
    address:this.fb.array([
      [null,Validators.required]
    ])
  })

  onSubmit(){
    console.log(this.regForm.value);
  }

  add(){
    (<FormArray>this.regForm.get('address')).push(new FormControl(null,Validators.required,))
  }

  delete(i:any){
    let data = this.regForm.get('address') as FormArray;

    data.removeAt(i);
  }

}
