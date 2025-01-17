import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DogGalleryComponent } from './components/dog-gallery/dog-gallery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,HttpClientModule, RouterOutlet, TodoListComponent, CommonModule,DogGalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
export class AppComponent {
  title = 'frontend';
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
