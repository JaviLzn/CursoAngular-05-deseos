import { Lista } from './../../models';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform( listas: Lista[], completada: boolean) {
    return listas.filter (lista => lista.terminada === completada)
  }
}
