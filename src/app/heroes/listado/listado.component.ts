import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['flecha verde', 'super man', 'batman', 'acuaman'];
  public heroeBorrado: string = ''; //propiedad creada para el borrado

  //Este metodo borra un elemento del array y retorna el eliminado.
  borrarHeroe(): void{
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
