import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

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
  
    {path: 'servers', component: ServersComponent, children: [
      {path: ':id', component: ServerComponent},
    {path: ':id/edit', component: EditServerComponent}
  
    ]},
    {path: 'not-found', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/not-found'}
  
  ];

  @NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
  })

  export class AppRoutingModule{
    
  }