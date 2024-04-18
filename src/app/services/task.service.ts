import { Injectable } from '@angular/core';
import { Task } from '../Task';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
private apiUrl = 'http://localhost:5000/tasks';
  constructor( private http:HttpClient) { }

getTasks(): Observable<Task[]> {
  return this.http.get<Task[]>(this.apiUrl);
}
deleteTask(id : number|undefined): Observable<Task> {
  const apiUrl = `${this.apiUrl}/${id}`;
 return this.http.delete<Task>(apiUrl);
}

updateTaskReminder(task:Task) : Observable<Task>{
  const apiUrl = `${this.apiUrl}/${task.id}`;
  return this.http.put<Task>(apiUrl,task)
}

addTask (task : Task) : Observable<Task> {
  return this.http.post<Task>(this.apiUrl,task);
}

}
