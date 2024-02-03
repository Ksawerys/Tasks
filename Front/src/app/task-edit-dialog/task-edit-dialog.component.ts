import { Component, Inject } from '@angular/core';
import { MatDialogClose, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent } from '@angular/material/dialog';
import { FormBuilder,FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButton} from "@angular/material/button";
import { TasksService } from '../services/tasks.service';
import {HttpResponse} from "@angular/common/http";
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-task-edit-dialog',
  standalone: true,
  imports: [ ReactiveFormsModule, MatDialogTitle,
    MatDialogContent,
    MatButton,
    MatDialogClose],
  templateUrl: './task-edit-dialog.component.html',
  styleUrl: './task-edit-dialog.component.css'
})
export class TaskEditDialogComponent {
  
  form = new FormGroup({
    description: new FormControl(this.data.description),
    difficulty: new FormControl(this.data.difficulty),
    assignment: new FormControl(this.data.assignment),
    time_estimated: new FormControl(this.data.time_estimated),
    time_dedicated: new FormControl(this.data.time_dedicated),
    progress: new FormControl(this.data.progress),
    done: new FormControl(this.data.done),
   });

 constructor(@Inject(MAT_DIALOG_DATA) public data: any, private tasksService: TasksService, private router:Router,private dialog: MatDialog) {}

 submitForm() {
    console.log(this.form.value);
 }

 editTask() {
  this.tasksService.updateTask(this.data.id, this.form.value).subscribe({
    next: (respuesta: HttpResponse<any>) => {
      this.dialog.closeAll();
      window.location.reload();
    }
  });
}
}