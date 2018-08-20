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
    this.lista = new Lista(titulo);
    this.deseosService.agregarLista( this.lista);
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

    this.nombreItem = '';
  }

  actualizarTarea(item: ListaItem) {
    item.completado = !item.completado;
  }

  borrar(idx: number) {
   this.lista.items.splice(idx,1);
  }
}
