import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ReactiveForm';

  isSubmit = false;

  loginForm:FormGroup;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      userPassword: new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  }

  get f() { 
    return this.loginForm.controls; 
  }

  public onSubmit(){

    this.isSubmit = true;

    if (!this.loginForm.valid)
    {
      return false;
    } else {
      console.log(this.loginForm.value.userName)
      console.log(this.loginForm.value.userPassword)
    }
  }

}
