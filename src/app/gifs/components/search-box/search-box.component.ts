import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Buscar Gifs"
      (keyup.enter)="searchTag()"
      #txtTagInput
    />
  `,
})
export class SearchBoxComponent implements OnInit {
  constructor(private gifsService:GifsService) {}
  @ViewChild('txtTagInput')
  tagInput!: ElementRef<HTMLInputElement>

  ngOnInit() {}

  searchTag() {
    const newTag = this.tagInput.nativeElement.value
    this.gifsService.searcTag(newTag);
    this.tagInput.nativeElement.value='';
  }
}
