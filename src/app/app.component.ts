import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './componenets/header/header.component';
import { TasksComponent } from './componenets/tasks/tasks.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './componenets/footer/footer.component';
import { CommonModule } from '@angular/common';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterModule,
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    TasksComponent,
    FormsModule,
    FooterComponent,
  ],
})
export class AppComponent {}
