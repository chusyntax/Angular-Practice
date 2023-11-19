import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
//You need to pass an object inot the directive to configure the directive
selector:'[appBasicHighlight]'
//Add brackets so that it can be recognised when you add it to an element wih=thout using square brackets
})

export class BasicHighlightDirective implements OnInit{
    constructor(private elementRef: ElementRef){}

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
        //It is not best practice to directly access your elements like this
    }

}

//We first get access to the element the directive was placed on, then get acces to that exact element, then overriding the style

