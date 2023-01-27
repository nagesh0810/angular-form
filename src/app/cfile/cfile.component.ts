
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cfile',
  templateUrl: './cfile.component.html',
  styleUrls: ['./cfile.component.css']
})
export class CfileComponent implements OnInit {
  selectedFile:any;
  form:any;


  constructor( private http:HttpClient) { 
    this.form={
      name:'',
      gender:'',
      images:''
    }
  }

  ngOnInit(): void {
  }

  onFileSelected(event:any){
    this.selectedFile=event.target.files[0];
  }
  onUpload(){
    
    this.http.post('http://localhost:3000/files',this.form)
    .subscribe(res => {
      alert('file uploaded')
      console.log(res);
    })
  }

}
