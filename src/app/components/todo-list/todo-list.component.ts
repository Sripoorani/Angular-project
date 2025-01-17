import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [HttpClientModule, InfiniteScrollModule, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit{
  todos: any[] = [];
  limit = 10; // Number of items per page
  skip = 0;   // Offset for pagination
  isLoading = false; // For lazy loading state
  hasMore = true;    // To track if more data is available

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    if (this.isLoading || !this.hasMore) return;

    this.isLoading = true;
    this.todoService.getTodos(this.limit, this.skip).subscribe(
      (response) => {
        console.log(response)
        this.todos = [...this.todos, ...response.todos];
        this.skip += this.limit;
        this.hasMore = response.total > this.todos.length;
        this.isLoading = false;
      },
      (error) => {
        console.error('Failed to fetch todos:', error);
        this.isLoading = false;
      }
    );
  }

  onScroll(): void {
    this.loadTodos();
  }
}
