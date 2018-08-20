import { Component } from "@angular/core";
import { Lista } from '../../models';
import { DeseosService } from '../../services/deseos.service';

@Component({
    selector: 'page-agregar',
    templateUrl : 'agregar.page.html'
})
export class AgregarPage {
    constructor (public deseosService: DeseosService) {}


    listaSeleccionada( lista: Lista) {

    }

}