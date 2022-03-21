import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
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

  ImageData = {
    dir: '',
    uploadName: ''
  }

  selectedFile = {
    src: '',
    image: File
  }

  constructor(private mongodb: MongodbService, private imageService: ImageService) { }

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

  processFile(imageInput: any) {
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = {
        src: event.target.result,
        image: imageInput.files[0]
      }

      this.ImageData = {
        dir: event.target.result,
        uploadName: this.makeid(10)
      }

      const data = {
        dir: this.ImageData.dir,
        uploadName: this.ImageData.uploadName
      }

      this.imageService.uploadImage(data).subscribe(
        (res) => {
        console.log(res);
        },
        (err) => {
          console.log(err);
        })
    });

    reader.readAsDataURL(imageInput.files[0]);
  }

  makeid(length: Number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
      charactersLength));
    }
    return result;
  }
}
