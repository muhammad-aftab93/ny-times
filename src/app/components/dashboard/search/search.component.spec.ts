import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {MainComponent} from "../main/main.component";
import {NewsServiceMock} from "../../../mocks/mocked-services/news-service-mock";
import {ArticlesService} from "../../../services/articles.service";
import {SearchFilters} from "../../../models/search-filters";
import {articlesMockData} from "../../../mocks/mocked-data/articles-mock-data";
import {ArticlesServiceMock} from "../../../mocks/mocked-services/articles-service-mock";

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ SearchComponent ],
      providers: [
        SearchComponent,
        { provide: ArticlesService, useClass: ArticlesServiceMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return articles', () => {
    let expectedData = articlesMockData;
    let filters: SearchFilters = {
      page: 1,
      sort: '',
      begin_date: '',
      end_date: '',
      facet: '',
      facet_fields: '',
      facet_filter: '',
      fl: '',
      fq: '',
      q: ''
    };
    component.searchArticles(filters);
    expect(component.articles).toBe(expectedData.response.docs);
  });
});
