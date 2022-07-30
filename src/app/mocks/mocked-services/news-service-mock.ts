import {NewsResponse} from "../../models/news-response";
import {Observable, of} from "rxjs";
import {homeMockData} from "../mocked-data/home-mock-data";
import {worldMockData} from "../mocked-data/world-mock-data";
import {scienceMockData} from "../mocked-data/science-mock-data";

export class NewsServiceMock {
  getNewsByCategory(category: string) : Observable<NewsResponse> {
    let data;
    switch (category){
      case "world":
        return of(worldMockData);
      case "science":
        return of(scienceMockData);
      default:
        return of(homeMockData)
    }
  }
}
