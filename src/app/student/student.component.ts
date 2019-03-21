import { Component, OnInit } from '@angular/core';
import  StudentService  from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
 student= {
    rn:0,
    birthDate:0,
    firstName:'',
    lastName:'',
    parentName:'',
    parentPhone:0,
    address:''
  };
  students=this.studentService.getStudents();
  
  constructor(private router :Router,private studentService :StudentService) { }
  addStudent(student){
    this.studentService.addStudent(student);
    this.studentService.getStudents();
    this.student={
      
      rn:0,
      birthDate:0,
      firstName:'',
      lastName:'',
      parentName:'',
      parentPhone:0,
      address:''
      }
    
  }
  updateStudent(student){
    this.studentService.updateStudent(student);
    this.studentService.getStudents();
    this.student={
      rn:0,
      birthDate:0,
      firstName:'',
      lastName:'',
      parentName:'',
      parentPhone:0,
      address:''
    } ;
  }
  deleteStudent(student){
  	this.studentService.deleteStudent(student);
  	student = this.studentService.getStudents();
  }
  // onSelect(student){
  //   this.studentService.onSelect(student);
  // }
  onEdit(rn:number)
  {
    this.router.navigate(['/edit',rn]);
  }
  
  ngOnInit() {}
  
}