import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces'; //aca se importo


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent  {

  personajes: Personaje[] = [
    {
      nombre: 'goku',
      poder: 15000
    },{
      nombre: 'Vegueta',
      poder: 7500
    },
  ]

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder : 10
  }

  //Este es el metodo que se ejecuta cuando se hace submit
 

}
