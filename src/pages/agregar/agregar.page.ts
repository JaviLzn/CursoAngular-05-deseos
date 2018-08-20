import { Component } from "@angular/core";
import { Lista } from '../../models';
import { DeseosService } from '../../services/deseos.service';
import { NavParams } from "ionic-angular";

@Component({
    selector: 'page-agregar',
    templateUrl : 'agregar.page.html'
})
export class AgregarPage {

lista: Lista;

    constructor (public deseosService: DeseosService,
                 private navParams: NavParams) {
                     console.log(this.navParams.get('tituloLista'));
                     const titulo = this.navParams.get('tituloLista');
                     this.lista = new Lista(titulo);
                 }


    listaSeleccionada( lista: Lista) {

    }

}