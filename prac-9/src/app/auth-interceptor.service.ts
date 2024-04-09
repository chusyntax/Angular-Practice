import { HttpInterceptor, HttpRequest, HttpHandler} from "@angular/common/http";
import { tap } from "rxjs/operators";


export class AuthInterceptorService implements HttpInterceptor{
    //Interceptors allow us to run code right before the request leaves our application
    intercept(req: HttpRequest<any>, next: HttpHandler) {
     //You need to return next.handle() in order for the request to leave the app
        const modifiedRequest = req.clone({
            headers: req.headers.append('Auth', 'xyz')
        })
        return next.handle(modifiedRequest)
        // .pipe(
        //     tap(event=>{
        //         console.log(event);
        //         if(event.type === HttpEventType.Response){
        //             console.log('Response arrived, body data: ');
        //             console.log(event.body);
        //         }
        //     })
        // )

        //You can interact with the request and the response within your interceptor
    }
}
//This service then has to be provided in a special way in the app.module.ts file









