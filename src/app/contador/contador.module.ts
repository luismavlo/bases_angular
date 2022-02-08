import { NgModule } from "@angular/core"; // Importamos el ngModule

import { ContadorComponent } from "./contador/contador.component";

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ]
})

export class ContadorModule{}