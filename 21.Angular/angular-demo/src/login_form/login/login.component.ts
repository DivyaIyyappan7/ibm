import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../service/userservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name:string;
  age:number;
  city:string;
  phone:string;
  gender:'male'|'female';
  
  constructor(private userService:UserserviceService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  save(){
    console.log(this.name)
    console.log(this.age)
    console.log(this.city)
    console.log(this.phone)
    console.log(this.gender)

    this.userService.name = this.name;
    this.userService.age = this.age;
    this.userService.city = this.city;
    this.userService.phone = this.phone;
    this.userService.gender = this.gender;
   
  }

}
