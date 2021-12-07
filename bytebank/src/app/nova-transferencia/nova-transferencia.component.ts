import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number | undefined;
  destino: number | undefined;


  constructor() { }

  ngOnInit(): void {
  }



  transferir() {
    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.aoTransferir.emit(valorEmitir);
    this.limparcampos();
  }

  limparcampos() {
    this.valor = 0;
    this.destino = 0;
  }

}
