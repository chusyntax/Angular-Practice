import { Observable } from "rxjs/Observable";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";

export interface CanCompoonentDeactivate {
    canDeactivate: ()=> Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanCompoonentDeactivate> {

    canDeactivate(component:CanCompoonentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, 
        nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        
    return component.canDeactivate();
}
}