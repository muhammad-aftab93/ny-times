import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Articles } from '../../../models/articles';
import { SearchFilters } from '../../../models/search-filters';
import { ArticlesService } from '../../../services/articles.service';
import { SpinnerService } from '../../../services/spinner.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  articles: Articles[] = [];
  dataSource: Articles[] = [];
  length: number = 0;
  pageIndex: number | undefined = 1;
  pageSize: number | undefined = 6;
  previousPageIndex: number | undefined = 0;

  constructor(private router: Router,
    private spinner: SpinnerService,
    private articlesService: ArticlesService) { }

  ngOnInit(): void {
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
    this.searchArticles(filters);
  }

  public searchArticles(filters: SearchFilters) {
    this.articlesService.searchArticles(filters)
      .subscribe({
        next: (result) => {
          this.length = result.response.docs.length;
          this.articles = result.response.docs;
          this.getServerData({
            length: this.length,
            pageIndex: 0,
            pageSize: 6,
            previousPageIndex: this.previousPageIndex
          });
        },
        error: (e) => {
          console.log(e.error['message']);
        }
      });
  }

  public getServerData(event: PageEvent) {
    if (event.pageIndex == 0)
      this.dataSource = this.articles.slice(0, event.pageSize);
    else
      this.dataSource = this.articles.slice((event.pageIndex * event.pageSize), (event.pageIndex + 1) * event.pageSize);
    this.pageIndex = event?.pageIndex;
    this.pageSize = event?.pageSize;
    this.previousPageIndex = event?.previousPageIndex;

    return event;
  }

  onSearchSubmit($event: SearchFilters) {
    this.articlesService.searchArticles($event)
      .subscribe({
        next: (result) => {
          this.length = result.response.docs.length;
          this.articles = result.response.docs;
          this.getServerData({
            length: this.length,
            pageIndex: 0,
            pageSize: 6,
            previousPageIndex: this.previousPageIndex
          });
        },
        error: (e) => {
          console.log(e.error['message']);
        }
      });
  }
}
