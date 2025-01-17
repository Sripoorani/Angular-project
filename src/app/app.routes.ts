import { Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { DogGalleryComponent } from './components/dog-gallery/dog-gallery.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';

export const routes: Routes = [
   
    {path:'todo-list',component:TodoListComponent},
    {path:'dog-gallery', component:DogGalleryComponent},
    {path:'account-detail',component:AccountDetailsComponent},
    { path: '', redirectTo: '/todo-list', pathMatch: 'full' },  
];
