import { Component } from '@angular/core';
import { Lista } from '../../models';
import { DeseosService } from '../../services/deseos.service';
import { NavParams } from 'ionic-angular';
import { ListaItem } from '../../models/lista-item.model';

@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.page.html'
})
export class AgregarPage {
  lista: Lista;
  nombreItem: string = '';

  constructor(
    public deseosService: DeseosService,
    private navParams: NavParams
  ) {
    // console.log(this.navParams.get('tituloLista'));
    const titulo = this.navParams.get('tituloLista');
    if (this.navParams.get('listaSeleccionada')) {
      this.lista = this.navParams.get('listaSeleccionada');
    } else {
      this.lista = new Lista(titulo);
      this.deseosService.agregarLista(this.lista);
    }
  }

  agregarItem() {
    if (this.nombreItem.length === 0) {
      return;
    }

    if (this.nombreItem.trim() === '') {
      return;
    }

    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);
    this.deseosService.guardarStorage();
    this.nombreItem = '';
  }

  actualizarTarea(item: ListaItem) {
    item.completado = !item.completado;

    const numPendientes = this.lista.items.filter( itemData => !itemData.completado).length;

    if (numPendientes === 0) {
      this.lista.terminada = true;
      this.lista.terminadaEn = new Date();
    } else {
      this.lista.terminada = false;
      this.lista.terminadaEn = null;
   }
    this.deseosService.guardarStorage();
  }

  borrar(idx: number) {
    this.lista.items.splice(idx, 1);
    this.deseosService.guardarStorage();
  }
}
