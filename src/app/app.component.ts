import { Component } from '@angular/core';
import { Employee } from './employee';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emp = new Employee('ABC', 10);
  msg: string = 'Hello....';

  onSubmit(form: NgForm){
    let name = form.controls['name'].value;
    let age = form.controls['age'].value;
    //creating new object reference will invoke onChanges cycle
    this.emp = new Employee(name, age);

    //assigning only values to exiting object wont invoke onChanges cycle
    // this.emp.age = age;
    // this.emp.name = name;
  }
}
