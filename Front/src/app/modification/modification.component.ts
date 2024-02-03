import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { TasksService } from '../services/tasks.service';
import { Tarea } from '../interfaces/Tarea';
import { TitleCasePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { TaskEditDialogComponent } from '../task-edit-dialog/task-edit-dialog.component';

@Component({
  selector: 'app-modification',
  imports: [FooterComponent, RouterLink,HeaderComponent,TitleCasePipe,TaskEditDialogComponent],
  templateUrl: './modification.component.html',
  styleUrls: [
    './modification.component.css',
    '../../styles.css'
 ],
  standalone: true
})
export class ModificationComponent implements OnInit{
  tasks: Tarea[];

  constructor(private tasksService: TasksService, private dialog: MatDialog) { 
    this.tasks = [];
   }

  ngOnInit() {
    this.tasksService.getTasks().subscribe(
       tasks => {
          this.tasks = tasks;
       },
       error => {
          console.error('Hubo un error al obtener las tareas');
       }
    );
   }
   
   openDialog(task: Tarea) {
      console.log(`Dialog result: evrg`);

      const dialogRef = this.dialog.open(TaskEditDialogComponent, {
         data: task,
         width: '500px',
         disableClose: false
         
      });
       dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  }, error => {
    console.error('Error al abrir el diálogo:', error);
  });

     }
}
