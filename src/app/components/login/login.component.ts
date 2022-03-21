import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: String = ''
  password: String = ''
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  async loginWithCognito(){
    var user = await Auth.signIn(this.email.toString(), this.password.toString());
    console.log("Verificación reliazada para el usuario: " + this.email);
    var tokens = user.signInUserSession;
    if(tokens != null){
      console.log("Usuario verificado")

      this.router.navigate(['ahys'])
        .then(() =>{
          window.location.reload();
        })
      alert('Has iniciado sesión');
    }
  }catch(error: any){
    console.log(error);
    alert('Verificación fallida');
  }

}
