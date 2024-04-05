import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { map } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class PostsService{

    constructor(private http: HttpClient){}

    createAndStorePost(title: string, content: string){
        const postData: Post = {title:title, content:content}
        this.http.post<{name:string}>('https://angular-course-eb92e-default-rtdb.firebaseio.com/posts.json', postData).subscribe(responseData=>{
            console.log(responseData)
          })
      //Http requests are managed by obserables in Angular. Therefore if you are not subscribing to an HTTP request, a post request wont even be sent out
      //Requests are only sent when you subscribe
    }
    fetchPosts(){
        this.http.get< { [key: string]: Post}>('https://angular-course-eb92e-default-rtdb.firebaseio.com/posts.json')
        //Between angle brackets, you store the type
        //These angle brackets are available on all requests
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
        })
        )
        .subscribe(posts =>{
         
        })
    }
}