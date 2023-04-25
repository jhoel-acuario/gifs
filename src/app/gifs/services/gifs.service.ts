import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _tagHistory: string[]=[]
  private apikey: string = environment.apiKey;
  private url : string =environment.url;
  public gifList: Gif[]=[]

  constructor(private http: HttpClient) { }
  get tagsHistory(){
    return [...this._tagHistory]
  }
  private organizeHistory(tag:string){
    tag = tag.toLowerCase();
    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter((oldTag)=>oldTag !== tag)
    }
    this._tagHistory.unshift(tag);
    this._tagHistory= this.tagsHistory.splice(0,10)
  }

  searcTag(tag:string):void{
    if (tag.length === 0) return;
    this.organizeHistory(tag)
    const params = new HttpParams()
      .set('api_key', this.apikey)
      .set('limit','10')
      .set('q', tag)

      this.http.get<SearchResponse>(`${this.url}/search`, {params}).subscribe(res=>{
        this.gifList= res.data
      })

  }
}
