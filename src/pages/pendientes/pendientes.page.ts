import { Component } from "@angular/core";
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models';
import { NavController, AlertController } from "ionic-angular";
import { AgregarPage } from "../agregar/agregar.page";

@Component({
    selector : 'page-pendientes',
    templateUrl: 'pendientes.page.html'
})
export class PendientesPage {

    constructor (public deseosService: DeseosService,
                 private navCtrl: NavController,
                 private alertCtrl: AlertController) {
                
    }

    listaSeleccionada ( lista: Lista) {
        this.navCtrl.push(AgregarPage, {
            tituloLista : lista.titulo,
            listaSeleccionada : lista
        });
    }

    agregarLista() {
        const alerta = this.alertCtrl.create({
            title: 'Nueva lista',
            message: 'Nombre de la nueva lista',
            inputs: [{
                name: 'titulo',
                placeholder: 'Escriba el nombre de la lista'
            }],
            buttons: [{
                text: 'Cancelar'
            },{
                text: 'Agregar',
                handler: data => {
                    if (data.titulo.length === 0){
                        return;
                    }
                    this.navCtrl.push(AgregarPage, {
                        tituloLista : data.titulo
                    });
                }
            }]
        });
        alerta.present();
    }

    borrarLista (lista: Lista) {
        this.deseosService.deleleLista ( lista);
    }

}
