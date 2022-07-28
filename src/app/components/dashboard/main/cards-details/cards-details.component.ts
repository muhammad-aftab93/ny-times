import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {News} from "../../../../models/news";

@Component({
  selector: 'app-cards-details',
  templateUrl: './cards-details.component.html',
  styleUrls: ['./cards-details.component.scss']
})
export class CardsDetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CardsDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public story: News,) { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
