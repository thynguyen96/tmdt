import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'
@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    loginGroup:  FormGroup; 
    user: any ={};
     token:any = {};
     list:any = [];
     sms: string;
     

    constructor(private http: HttpClient  ,
        private router: Router
         ) {
    }


    ngOnInit() {
 this.loginGroup = new FormGroup({
            username: new FormControl('', [
                Validators.required,
                // // tslint:disable-next-line:max-line-length
             ///  Validators.pattern (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                          ]),
            password: new FormControl('', [
              Validators.minLength(8),
                Validators.required
            ])
        })
      
}
public logout(){
    localStorage.removeItem('token');
}
public login(){
     console.log
     (this.loginGroup.value);
//     this.user.username = 'admin';
//     this.user.password = '123';
    this.http.post('http://localhost:8082/auth/login', this.loginGroup.value).subscribe(data => {
this.token = data ;
 this.sms =' dang nhap thanh cong';
        localStorage.setItem('token', this.token.access_token);
        this.router.navigate(['admin'])

    } , (err: HttpErrorResponse) => {
         console.log
         (err.error);
    if ( err.error instanceof Error ) {
        this.sms = 'erro client side '
    } else {
        if (err.status === 0 ){
            this.sms =' chua ket noi mang'
        }
        if (err.status === 401 ) {
        this.sms = 'sai mat khau'
        } 
        if (err.status === 500 ) {
            this.sms = 'sai mat khau'
        }
    }
    });

    // this.http.get('http://localhost:8082/api/all-topic',
    //    {
    //     headers: new HttpHeaders().set('Authorization' , 'Bearer ' + localStorage.getItem('token'))
    //    } 
    //  ).subscribe(data => {
    //     console.log(data)
    //     this.list = data;
    // })
}
}
