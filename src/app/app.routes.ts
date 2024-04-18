import { Routes } from '@angular/router';
import { TasksComponent } from './componenets/tasks/tasks.component';
import { AboutComponent } from './componenets/about/about.component';

export const routes: Routes = [
    {path : '' , component : TasksComponent},
    {path : 'about' , component : AboutComponent}
];
