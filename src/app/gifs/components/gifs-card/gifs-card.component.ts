import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
})
export class GifsCardComponent implements OnInit {
  constructor() {}
  @Input()
  public gif!: Gif;

  ngOnInit(): void {
    if(!this.gif) throw new Error('El gif es Requerido')
  }
}
