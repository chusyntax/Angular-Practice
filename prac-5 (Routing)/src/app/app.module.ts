import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  //Array of app routes
  //First item of object is the name of the routes(What will appear in the search bar) 
  //Second item is the action
  {path: '', component: HomeComponent},
  //The colon ':' tells Angular that this is the dynamic part of the route
  {path: 'users', component: UsersComponent},
    //The colon ':' tells Angular that this is the dynamic part of the route
  {path: 'users/:id/:name', component: UserComponent},
  {path: 'servers', component: ServersComponent},
  {path: 'servers/:id', component: ServerComponent},
  {path: 'servers/:id/edit', component: EditServerComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //The .forRoot() function allows us to register routes for our app
    //Takes in the appRoutes array
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
