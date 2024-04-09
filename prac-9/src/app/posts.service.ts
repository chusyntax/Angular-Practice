import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { map, catchError, tap } from "rxjs/operators";
import { Subject, throwError } from "rxjs";

@Injectable({providedIn: 'root'})
export class PostsService{
error = new Subject<string>();

    constructor(private http: HttpClient){}
    createAndStorePost(title: string, content: string){
        const postData: Post = {title:title, content:content}
        this.http.post<{name:string}>('https://angular-course-eb92e-default-rtdb.firebaseio.com/posts.json', postData).subscribe(responseData=>{
            console.log(responseData)
          },error=>{
            this.error.next(error.message)
          })
      //Http requests are managed by obserables in Angular. Therefore if you are not subscribing to an HTTP request, a post request wont even be sent out
      //Requests are only sent when you subscribe
    }
    fetchPosts(){
        let searchParams = new HttpParams();
        searchParams = searchParams.append('print', 'pretty');
        searchParams = searchParams.append('custom', 'key');
        return this.http.get< { [key: string]: Post}>('https://angular-course-eb92e-default-rtdb.firebaseio.com/posts.json'
        //Between angle brackets, you store the type
        //These angle brackets are available on all requests
        , {
            headers: new HttpHeaders({'Custom-Header': 'Hello'}),
             //This is how you would set headers
            params: searchParams,
            responseType: 'json'
            //This is how you would add search parameters
           
        })
        .pipe(map(responseData =>{
              //Using Observable operators in order to transform data allows us to write cleaner code
              //Map oberservable allows us to get data and return new data which is then automatically rewrapped into an observable so that we can still subscribe to it
          const postsArray: Post[] = [];
          for(const key in responseData){
            if(responseData.hasOwnProperty(key)){
              postsArray.push({...responseData[key], id: key})
            }
          }
          return postsArray;
        }),
        catchError(errorRes =>{
            return throwError(errorRes)
        })
        );
      
    }
deletePosts(){
    return this.http.delete('https://angular-course-eb92e-default-rtdb.firebaseio.com/posts.json',
    {
        observe: 'events'
    }
 
  )
  .pipe(tap(event=>{
    console.log(event)  
     //Tap operator ~ Allows us to execute code without altering the response ()
     if(event.type === HttpEventType.Response){
        console.log(event.body);
     }
  }))
}

}