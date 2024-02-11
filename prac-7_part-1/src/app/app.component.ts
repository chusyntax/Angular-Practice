import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion='pet';
  answer = '';
  genders= ["male", "female"];
  submitted=false;
  user={
    username:'',
    email:'',
    secretQuestion:'',
    answer:'',
    gender:''
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    //Downside of set value is that itll wipe all the info that was already entered in the form
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email:'' 
    //   },
    //   secret:'pet',
    //   questionAnswer:'',
    //   gender: 'male'
    // })
    this.signupForm.form.patchValue({
      //Patch value willl only override the value given
      //patch value is only available on the form object
      userData: {
        username: suggestedName
      }
    })
  }

  // onSubmit(){
  //   console.log(this.signupForm)
  // }

  onSubmit(){
    this.submitted=true;
    this.user.username=this.signupForm.value.userData.username;
    this.user.email=this.signupForm.value.userData.email;
    this.user.secretQuestion=this.signupForm.value.secret;
    this.user.answer=this.signupForm.value.questionAnswer;
    this.user.gender=this.signupForm.value.gender;

    this.signupForm.reset();
  }
  }
  
  
  


