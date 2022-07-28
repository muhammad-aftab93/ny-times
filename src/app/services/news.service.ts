import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {NewsResponse} from "../models/news-response";
import {HttpClient} from "@angular/common/http";
import {TOP_STORIES} from "../constants/api-urls";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNewsByCategory(section: string) : Observable<NewsResponse> {
    return this.http.get<NewsResponse>(TOP_STORIES);
  }
}
