import { Component } from '@angular/core';

import { pendientesPage } from '../pendientes/pendientes.page';
import { terminadosPage } from '../terminados/terminados.page';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = pendientesPage;
  tab2Root = terminadosPage;

  constructor() {

  }
}
