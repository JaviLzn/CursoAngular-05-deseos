import { Component } from "@angular/core";
import { DeseosService } from '../../services/deseos.service';
<<<<<<< HEAD
import { Lista } from '../../models';
=======
>>>>>>> ca0d50ab083dd22168a9d93098ba20b3fec6b423

@Component({
    selector : 'page-pendientes',
    templateUrl: 'pendientes.page.html'
})
export class PendientesPage {
<<<<<<< HEAD
=======

    constructor (public deseosService: DeseosService) {
                
    }
>>>>>>> ca0d50ab083dd22168a9d93098ba20b3fec6b423

    constructor (public deseosService: DeseosService) {
                
    }

    listaSeleccionada ( lista: Lista) {}
}
