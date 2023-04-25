import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _tagHistory: string[]=[]
  private apikey: string = environment.apiKey;
  private url : string =environment.url;
  public gifList: Gif[]=[]

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
    console.log(' Gifs Service Ready');
   }
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
    this.savelocalStorage();
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

  private savelocalStorage():void{
    localStorage.setItem('history', JSON.stringify(this._tagHistory))
  }

  private loadLocalStorage():void{
    if (!localStorage.getItem('history')) return

   this._tagHistory = JSON.parse(localStorage.getItem('history')!);

   if (this._tagHistory.length===0) return
   this.searcTag(this._tagHistory[0]);

  }
}
