import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  constructor() { }

  show(u: any,p: any){
    console.log(u);
    console.log(p);
  }

  ngOnInit(): void {
  }

}
