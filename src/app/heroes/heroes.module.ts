import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core"; // Importamos el ngModule


/* Importamos los componentes del directorio */
import { HeroeComponent } from "./heroe/heroe.component"; 
import { ListadoComponent } from "./listado/listado.component";

/* Creamos el decorador */
@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]
})

export class HeroesModule{}