import { Component } from "@angular/core";
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models';

@Component({
    selector : 'page-pendientes',
    templateUrl: 'pendientes.page.html'
})
export class PendientesPage {

    constructor (public deseosService: DeseosService) {
                
    }

    listaSeleccionada ( lista: Lista) {}
}
