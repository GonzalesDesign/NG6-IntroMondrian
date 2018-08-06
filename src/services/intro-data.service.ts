import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PhotosInterface } from './../services/photos.interface';

@Injectable({
  providedIn: 'root'
})
export class IntroDataService {

  private _url = './../assets/Data/photos.json';


  constructor(private _http: HttpClient) { }

  introData (): Observable<PhotosInterface[]> {
    return this._http.get<PhotosInterface[]>(this._url);
  }


}
