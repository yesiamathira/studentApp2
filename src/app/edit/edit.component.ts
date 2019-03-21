import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import StudentService from '../student.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  rn: number;
  private sub: any;
  student:any;
  
  constructor(private route: ActivatedRoute, private studentService:StudentService,private router :Router) { }

  ngOnInit() {
    this.studentService.getStudents();
    const rn=+this.route.snapshot.params['rn'];
    this.student=this.studentService.getStudentById(rn);
  }
  updateStudent(student){
    this.studentService.updateStudent(student);
    this.router.navigate(['/student']);
  }
}