import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
  //Emulated is the default. Native(Now ShadowDom) works as a ShadowDOM. None removes the view encapsulation~ Styles get applied globaly
})
export class ServerElementComponent implements OnInit {
@Input('srvElement')  element: {type: string, name: string, content:string};
// The @Input is a decorator and it exposes an element so that child components have access to it. It exposes properties because by default TypeScript doesnt do that
//In the brackets, you can pass a string that will be the alias for the property you want to expose

//@Input makes properties bindable from outside
  constructor() { }

  ngOnInit(): void {
  }

}
