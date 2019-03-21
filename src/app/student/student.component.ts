import { Component, OnInit } from '@angular/core';
import  StudentService  from '../student.service';

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
  
  constructor(private studentService :StudentService) { }
  addStudent(student){
    this.studentService.addStudent(student);
    this.studentService.getStudents();
    // this.student={
      
    //   rn:0,
    //   birthDate:0,
    //   firstName:'',
    //   lastName:'',
    //   parentName:'',
    //   parentPhone:0,
    //   address:''
    //   }
    
  }
  updateStudent(student){
    this.studentService.updateStudent(student);
    this.studentService.getStudents();
    // this.student={
    //   rn:0,
    //   birthDate:0,
    //   firstName:'',
    //   lastName:'',
    //   parentName:'',
    //   parentPhone:0,
    //   address:''
    // } ;
  }
  deleteStudent(student){
  	this.studentService.deleteStudent(student);
  	student = this.studentService.getStudents();
  }
  // onSelect(student){
  //   this.studentService.onSelect(student);
  // }
  ngOnInit() {}
  
}