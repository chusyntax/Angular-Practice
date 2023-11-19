import {Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit{
    @Input() defaultColor: string = 'transparent';
    @Input('appBetterHighlight') highlightColor: string = 'blue';

    @HostBinding('style.backgroundColor') backgroundColor: string;

    constructor(private elRef: ElementRef, private renderer: Renderer2){}

    ngOnInit() {
        this.backgroundColor = this.defaultColor;
        //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');

        //setStyle takes in 4 parameters. The fourth one are the flags eg. !important
        //This is a much better way to create a directive
    }
    
    @HostListener('mouseenter') mouseover(eventData: Event){
       // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
       this.backgroundColor = this.highlightColor;
    };

    @HostListener('mouseleave') mouseleave(eventData: Event){
        //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = this.defaultColor;
    }
}
