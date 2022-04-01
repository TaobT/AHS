import { Component, OnInit } from '@angular/core';
import { MongodbService } from 'src/app/services/mongodb.service';

@Component({
  selector: 'app-add-locals',
  templateUrl: './add-locals.component.html',
  styleUrls: ['./add-locals.component.scss']
})
export class AddLocalsComponent implements OnInit {
  Local = {
    Nombre_Local: '',
    Direccion: '',
    Propietario: '',
    Aforo_Max: ''
  }
  submitted = false;

  newInputData(): void{
    this.submitted = false;
    this.Local = {
      Nombre_Local: '',
      Direccion: '',
      Propietario: '',
      Aforo_Max:''
    };
  }

  constructor(private mongodb: MongodbService) { }


  ngOnInit(): void {
  }

  saveInputData(): void{
    const data = {
      Nombre_Local: this.Local.Nombre_Local,
      Direccion: this.Local.Direccion,
      Propietario: this.Local.Propietario,
      Aforo_Max: this.Local.Aforo_Max
    };

    this.mongodb.createInputData(data)
      .subscribe(
        response =>{
          console.log(response);
          this.submitted = true;
        },
        error =>{
          console.log(error);
        }
      );
  }

}
