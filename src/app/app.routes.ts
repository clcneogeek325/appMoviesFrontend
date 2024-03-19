import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'movies',
        title:'Change detection',
        loadComponent:() => import('./movies-list/movies-list.component')
        
    },
    {
        path:'add',
        title:'Change detection',
        loadComponent:() => import('./movies-add/movies-add.component')
        
    },
    {
        path:'',
        redirectTo:'/movies',
        pathMatch:'full'
    }
];
