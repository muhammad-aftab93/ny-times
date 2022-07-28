import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {News} from "../../../models/news";
import {NewsService} from "../../../services/news.service";
import {NewsResponse} from "../../../models/news-response";
import {SpinnerService} from "../../../services/spinner.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  stories: News[] = [];

  constructor(private router: Router,
              private spinner: SpinnerService,
              private newsService: NewsService) { }

  ngOnInit(): void {
    this.getTopStories('home');
  }

  onLogout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  private getTopStories(section: string) {
    this.newsService.getNewsByCategory(section)
      .subscribe({
        next: (result) => {
          this.stories = result.results;
          this.spinner.hide();
        },
        error: (e) => {
          this.spinner.hide();
          alert(e.error['message']);
        },
        complete: () => {
          this.spinner.hide();
        }
      });
  }
}
