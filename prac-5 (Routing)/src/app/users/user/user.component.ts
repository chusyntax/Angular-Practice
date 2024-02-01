import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  //Remember that ActivatedRoute helps us gain access to currently loaded route. It will help gice us access to the id passed in the URL (Selected User)
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //Here we are getting our user
    this.user = {
    //Getting id straight from the link
    id:this.route.snapshot.params['id'],
    name:this.route.snapshot.params['name']
    };

    //Used to react to changes made on the page so that the app doesnt reload
    this.route.params.subscribe(
      (params: Params)=>{
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    )
    //Here, params is an Observable - Feature made by a third party package that allow you to easily work with asynchronous tasks

    //This is used to inform the component of any changes in the route parameters

  }

  ngOnDestroy(){
    //Used to manually unsubscribe and destroy this from memory
    this.paramsSubscription.unsubscribe()
  }

}
