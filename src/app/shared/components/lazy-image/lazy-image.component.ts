import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',

})
export class LazyImageComponent implements OnInit {

  constructor() { }
  @Input()
  public url! : string
  @Input()
  public alt : string =''

  public hasLoader:boolean=false

  ngOnInit(): void {
    if(!this.url) throw new Error('URL es requerido')
  }
  onLoad(){
    setTimeout(()=>{
      this.hasLoader= true
    }, 1000)

  }

}
