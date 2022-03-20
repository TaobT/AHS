import { Component, OnInit } from '@angular/core';
import { MongodbService } from 'src/app/services/mongodb.service';

@Component({
  selector: 'app-add-inputdata',
  templateUrl: './add-inputdata.component.html',
  styleUrls: ['./add-inputdata.component.scss']
})
export class AddInputdataComponent implements OnInit {
  InputData = {
    ID_Local: '',
    Fecha: '',
    UrlImagen: ''
  }
  submitted = false;

  constructor(private mongodb: MongodbService) { }

  ngOnInit(): void {
  }

  saveInputData(): void{
    const data = {
      ID_Local: this.InputData.ID_Local,
      Fecha: this.InputData.Fecha,
      UrlImagen: this.InputData.UrlImagen
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

  newInputData(): void{
    this.submitted = false;
    this.InputData = {
      ID_Local: '',
      Fecha: '',
      UrlImagen: ''
    };
  }

}
