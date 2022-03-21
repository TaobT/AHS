import { Component } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AHS';
  isNotLogged = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userRegistered()
  }

  async userRegistered() {
    try {
        await Auth.currentAuthenticatedUser();
        this.isNotLogged = false;
        console.log("User is Logged!")
    } catch {
        this.isNotLogged = true;
        console.log("User isn't Logged!")
    }
  }

  async logOut(){
    try {
      console.log("Cerrando sesión...")
      await Auth.signOut();
      this.router.navigate(['login'])
        .then(() =>{
          window.location.reload();
        })
    } catch (error) {
        console.log('Error al cerrar sesión: ', error);
    }
  }
}
