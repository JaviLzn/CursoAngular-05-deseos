import { AgregarPage } from './../pages/agregar/agregar.page';
import { Component, OnInit, Input } from '@angular/core';
import { DeseosService } from '../services/deseos.service';
import { Lista } from '../models';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html'
})
export class ListasComponent implements OnInit {

  @Input() terminado: boolean = false;

  constructor(public deseosService: DeseosService,
              private navCtrl: NavController,) { }

  ngOnInit(): void { }

  borrarLista (lista: Lista) {
    this.deseosService.deleleLista ( lista);
}
listaSeleccionada ( lista: Lista) {
  this.navCtrl.push(AgregarPage, {
      tituloLista : lista.titulo,
      listaSeleccionada : lista
  });
}

}
