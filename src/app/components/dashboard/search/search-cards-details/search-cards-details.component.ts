import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Articles } from '../../../../models/articles';

@Component({
  selector: 'app-search-cards-details',
  templateUrl: './search-cards-details.component.html',
  styleUrls: ['./search-cards-details.component.scss']
})
export class SearchCardsDetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SearchCardsDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public article: Articles,) { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
