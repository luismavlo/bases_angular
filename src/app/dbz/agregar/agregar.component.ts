import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'stream';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent  {


  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  @Output() nuevoPersonaje: EventEmitter = new EventEmitter();

  agregar( ){
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
  
    this.nuevo = {
      nombre: '',
      poder: 0
    }
    
   }

}
