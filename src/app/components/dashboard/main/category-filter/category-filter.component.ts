import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Categories} from "../../../../models/categories";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss']
})
export class CategoryFilterComponent implements OnInit {
  @Output() categorySelectionChanged = new EventEmitter();
  categories: Categories[] = [];

  constructor() {
    this.categories = [
      { value: "default", text: "Default" },
      { value: "world", text: "World" },
      { value: "science", text: "Science" },
    ];
  }

  ngOnInit(): void {
  }

  onCategoryChange($event: MatSelectChange) {
     let value = $event.value;
     this.categorySelectionChanged.emit(value);
  }
}
