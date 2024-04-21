import { TaskService } from './../../services/task.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent implements OnInit{
 constructor () {}
 @Input() task : Task | undefined ;

 @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
 @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();


ngOnInit(): void {}

onDelete(id:any) {
  this.onDeleteTask.emit(id);
}
onToggle(task:Task|undefined ) {
  this.onToggleReminder.emit(task);

}

}
