import { Component } from '@angular/core';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';
import { TASKS } from '../../mock-tasks';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../../services/task.service';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule,TaskItemComponent,AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

tasks: Task[]= [] ;
listTask : Task | undefined
constructor (private taskService : TaskService) {

}
ngOnInit(): void {
    this.taskService.getTasks().subscribe(task => this.tasks = task)
}

deleteTask(id:any) {
  this.taskService.deleteTask(id).subscribe( () => {
    this.tasks = this.tasks.filter( data => data.id != id)
    console.log('data');
   })
}

toggleReminder(task :Task) {
console.log('rrrr',task);
task.reminder = !task.reminder;
 this.taskService.updateTaskReminder(task).subscribe();
}

addTask(task:Task) {
console.log('taskk',task);
console.log('tasks avant push',this.tasks)
this.taskService.addTask(task).subscribe( task => {
  this.tasks.push(task);
  console.log('tasks after push',this.tasks)
})
}

}
