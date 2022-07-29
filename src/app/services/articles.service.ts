import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_KEY, ARTICLES_SEARCH } from '../constants/api-urls';
import { ArticlesResponse } from '../models/articles-response';
import { SearchFilters } from '../models/search-filters';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  searchArticles(filters: SearchFilters): Observable<ArticlesResponse> {
    let apiUrl = ARTICLES_SEARCH;
    let apiKey = API_KEY;
    let query = '';

    if (filters.begin_date)
      query += `begin_date=${filters.begin_date}&`;

    if (filters.end_date)
      query += `end_date=${filters.end_date}&`;

    if (filters.facet)
      query += `facet=${filters.facet}&`;

    if (filters.facet_fields)
      query += `facet_fields=${filters.facet_fields}&`;

    if (filters.facet_filter)
      query += `facet_filter=${filters.facet_filter}&`;

    if (filters.fl)
      query += `fl=${filters.fl}&`;

    if (filters.fq)
      query += `fq=${filters.fq}&`;

    if (filters.page && filters.page != 0)
      query += `page=${filters.page}&`;

    if (filters.q)
      query += `q=${filters.q}&`;

    if (filters.sort)
      query += `sort=${filters.sort}&`;

    apiUrl = `${apiUrl}?${query}api-key=${apiKey}`;
    return this.http.get<ArticlesResponse>(apiUrl);
  }
}
