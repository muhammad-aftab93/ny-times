import { Component, Input, OnInit } from '@angular/core';
import { News } from '../../../../models/news';
import {CardsDetailsComponent} from "../cards-details/cards-details.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input('story') story: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(story: News): void {
    const dialogRef = this.dialog.open(CardsDetailsComponent, {
      height: '600px',
      width: '900px',
      data: story,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
