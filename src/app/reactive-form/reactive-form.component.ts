import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  reactiveForm:FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({

      firstname: new FormControl(null,[Validators.required,Validators.minLength(6)]),
      lastname: new FormControl(null,[Validators.required,Validators.minLength(4)]),
      email: new FormControl(null,[Validators.required,Validators.email]),
      gender: new FormControl(null,[Validators.required]),
      country: new FormControl(null,[Validators.required]),
      skills: new FormArray([
        new FormControl(null,Validators.required)
      ])
    })
  }

  onSubmit(){
    console.log(this.reactiveForm.value);
  }

  add(){
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null,Validators.required,))
  }

  delete(i:any){
    let skill = this.reactiveForm.get('skills') as FormArray;

    skill.removeAt(i);
  }

}
