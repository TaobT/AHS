import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  register(){
    try{
      const user = Auth.signUp({
        username: this.email,
        password: this.password,
        attributes: {
          email: this.email
        }
      });
      console.log({user});
      alert('Usuario registrado. Por favor verifica tu correo eletrónico.')
      this.router.navigate(['login']);
    }catch(error){
      console.log(error)
      console.log('Error al registrarse')
    }
  }
}
