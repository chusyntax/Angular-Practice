import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';

const appRoutes: Routes = [
    //Array of app routes
    //First item of object is the name of the routes(What will appear in the search bar) 
    //Second item is the action
    {path: '', component: HomeComponent},
    //The colon ':' tells Angular that this is the dynamic part of the route
    {path: 'users', component: UsersComponent, children:[
      {path: ':id/:name', component: UserComponent}
    ]},
      //The colon ':' tells Angular that this is the dynamic part of the route
  
      //The canActivate parameter takes in an array of all the guards you want to apply tp the route
      //It also applies to all the child routes
    {path: 'servers', 
    //canActivate: [AuthGuard], 
    canActivateChild: [AuthGuard],
    component: ServersComponent, children: [
      {path: ':id', component: ServerComponent, resolve: {server: ServerResolver}},
    {path: ':id/edit', component: EditServerComponent, canDeactivate:[CanDeactivateGuard]}
  
    ]},
   // {path: 'not-found', component: PageNotFoundComponent},
   {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page Not found!'}},
    {path: '**', redirectTo: '/not-found'}
  
  ];

  @NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash:true})
    ],
    exports: [RouterModule]
  })

  export class AppRoutingModule{
    
  }