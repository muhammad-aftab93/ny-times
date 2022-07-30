import {SearchFilters} from "../../models/search-filters";
import {Observable, of} from "rxjs";
import {ArticlesResponse} from "../../models/articles-response";
import {articlesMockData} from "../mocked-data/articles-mock-data";

export class ArticlesServiceMock {
  searchArticles(filters: SearchFilters): Observable<ArticlesResponse> {
      return of(articlesMockData);
  }
}
