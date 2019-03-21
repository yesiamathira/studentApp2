import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class StudentService {
 
  student:{rn:number,birthDate:number,firstName:string,lastName:string,parentName:string,parentPhone:number,address:string};
  
  students=[
    {rn:1,birthDate:'11/04/1993',firstName:'Kritika',lastName:'Roy',parentName:'Riswan',parentPhone:'09038187691',address:'Bangalore'},
    {rn:2,birthDate:'13/04/1992',firstName:'Athira',lastName:'Bala',parentName:'Latha',parentPhone:'09045678990',address:'Sharjah'},
  ];
  
  constructor(private router :Router) { 
    this.student = {
      rn:0,
      birthDate:0,
      firstName:'',
      lastName:'',
      parentName:'',
      parentPhone:0,
      address:''
    };
  }
 
  getStudents(){
    if(localStorage.getItem('students')!=null)
    {
      this.students = JSON.parse(localStorage.getItem('students'));
    }
  	return this.students;
  }
 
  addStudent(student){
  	student.rn = this.students.length+1;
    	this.students.push(student);
      localStorage.setItem('students', JSON.stringify(this.students));
}
updateStudent(student){
  var update=false;
  this.student=student;
  for(var i=0;i<this.students.length;i++){
    if(this.student.rn == this.students[i].rn){
      update=true;
      this.students[i] = student;
      localStorage.setItem('students', JSON.stringify(this.students));
      break;
    }
  }
  if(!update)
    {
      this.student.rn = this.students.length+1;
      this.students.push(student);
      localStorage.setItem('students', JSON.stringify(this.students));
    }
}
// onSelect(student)
//   {
//     this.student=student;
//   }
deleteStudent(student){

    var List=[];
    this.student=student;
    for(var i=0;i<this.students.length;i++)
    {
         if(this.student.rn!=(this.students[i].rn))
        {
               List.push(this.students[i]);
        }
    }
    this.students=List;
    localStorage.setItem('students', JSON.stringify(this.students));
  }
  
}