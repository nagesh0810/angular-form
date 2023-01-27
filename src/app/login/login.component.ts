import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  countryList = ['India', 'US', 'UK'];
  user:any;

  constructor( private http:HttpClient) { 
    this.user={
      name:''
    }
 
  }


  ngOnInit(): void {
    
  }

  onSubmit(data:NgForm){
    console.log(data.value);

    this.http.post('http://localhost:3000/users',this.user).subscribe((result)=> {
      alert('user saved successfully')
      // this.userList = result;
  })
    
  }

  resetForm(userForm:NgForm){
    userForm.resetForm();

  }

}
