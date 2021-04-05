import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  class:string = "";
  b:string = "Divya";
  a:string;
  constructor() { }

  ngOnInit(): void {
  }

  readDataFromTemplateForB(data:string){
    // console.log(data);
    if(data.length>4){
      this.class = "p";
      this.a=data;
    }
    else{
      this.class = "c";
      this.a=data;
    }
    console.log(this.a);
  }

}
