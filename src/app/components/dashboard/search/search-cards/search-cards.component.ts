import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Articles } from '../../../../models/articles';
import { SearchCardsDetailsComponent } from '../search-cards-details/search-cards-details.component';

@Component({
  selector: 'app-search-cards',
  templateUrl: './search-cards.component.html',
  styleUrls: ['./search-cards.component.scss']
})
export class SearchCardsComponent implements OnInit {

  @Input('article') article: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(article: Articles): void {
    const dialogRef = this.dialog.open(SearchCardsDetailsComponent, {
      height: '600px',
      width: '900px',
      data: article,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
