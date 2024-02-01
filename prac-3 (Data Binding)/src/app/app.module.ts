import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    AppComponent, 
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// Now let's use this directive. To use it, we have to do two things. First of all, like for a component, we have to inform Angular that we have a new directive. Just like with components, it doesn't scan all our files, so it doesn't know. So we have to go to app module, and here in declarations, we have to add our BasicHighlightDirective and also add the import pointing to the basic highlight folder and there to the BasicHighlightDirective file.
