import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }

  get tagHystory():string[]{
    return this.gifsService.tagsHistory

  }
  valueNew(tag:string){
    console.log({tag});
    this.gifsService.searcTag(tag)
  }

}
