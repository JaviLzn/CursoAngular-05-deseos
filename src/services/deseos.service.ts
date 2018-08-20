import { Injectable } from '@angular/core';
import { Lista } from '../models';


@Injectable()
export class DeseosService {

    Listas : Lista[] = [];

    constructor () {
        this.cargarStorage();
        // console.log('Deseos service inicializado');
        // const lista1 = new Lista('Tareas 1');
        // const lista2 = new Lista('Tareas 2');

        // this.Listas.push(lista1, lista2);
        // console.log(this.Listas);
        
    }

    agregarLista( lista: Lista){
        this.Listas.push(lista);
        this.guardarStorage();
    }

    guardarStorage(){
        localStorage.setItem('data', JSON.stringify(this.Listas));
    }

    cargarStorage(){
        if (localStorage.getItem('data')){
            this.Listas = JSON.parse(localStorage.getItem('data'));
        }
    }
}
