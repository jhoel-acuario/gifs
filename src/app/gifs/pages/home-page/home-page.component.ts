import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
data: any
  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
   // this.gifsService.searcTag
  }
  get gifs():Gif[]{
    return this.gifsService.gifList;
  }

}
