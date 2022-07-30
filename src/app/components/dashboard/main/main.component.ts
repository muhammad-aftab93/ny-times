import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {News} from "../../../models/news";
import {NewsService} from "../../../services/news.service";
import {SpinnerService} from "../../../services/spinner.service";
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  stories: News[] = [];
  dataSource: News[] = [];
  length: number = 0;
  pageIndex: number | undefined = 1;
  pageSize: number | undefined = 6;
  previousPageIndex: number | undefined = 0;

  constructor(private router: Router,
              private spinner: SpinnerService,
              private newsService: NewsService) { }

  ngOnInit(): void {
    this.getTopStories('home');
  }

  public getTopStories(category: string) {
    this.newsService.getNewsByCategory(category)
      .subscribe({
        next: (result) => {
          this.length = result.num_results;
          this.stories = result.results;
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
      this.dataSource = this.stories.slice(0, event.pageSize);
    else
      this.dataSource = this.stories.slice((event.pageIndex * event.pageSize), (event.pageIndex+1) * event.pageSize);
    this.pageIndex = event?.pageIndex;
    this.pageSize = event?.pageSize;
    this.previousPageIndex = event?.previousPageIndex;

    return event;
  }

  onCategoryChange(value: any) {
    this.getTopStories(value);
  }
}
