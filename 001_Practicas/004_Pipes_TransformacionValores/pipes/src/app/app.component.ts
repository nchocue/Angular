import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   nombre:string = "Capitan America";
   nombre2: string = 'nestor fernando chocue';
   arreglo: number [] = [1, 2, 3, 4, 5, 6,7,8];
   PI: number = Math.PI;
  fecha: Date = new Date();
  valorPromesa = new Promise<string>(
    (resolve) => {
      
      setTimeout(()=>{
        resolve('llego promesa');
      }, 4500);

    });

   porcentaje: number = 0.264;
   salario: number = 123.4;
   heroe ={
     nombre: 'Nombre',
     clave:'som cñave',
     edad: 500,
     direccion:{
       calle: 'carrera 42',
       casa: '202'
     }
   }

   videoUlr:string ='https://www.youtube.com/embed/_wOAyFpPgZA';
}
