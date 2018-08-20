import { Component } from "@angular/core";
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models';
import { NavController } from "ionic-angular";
import { AgregarPage } from "../agregar/agregar.page";

@Component({
    selector : 'page-pendientes',
    templateUrl: 'pendientes.page.html'
})
export class PendientesPage {

    constructor (public deseosService: DeseosService,
                 private navCtrl: NavController) {
                
    }

    listaSeleccionada ( lista: Lista) {}

    agregarLista() {
        this.navCtrl.push(AgregarPage)
    }
}
