import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SearchFilters} from "../../../../models/search-filters";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Output() onSearchSubmit = new EventEmitter();
  filterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.filterForm = this.formBuilder.group({
      begin_date: [''],
      end_date: [''],
      facet: [''],
      facet_fields: [''],
      facet_filter: [''],
      fl: [''],
      fq: [''],
      page: 0,
      q: [''],
      sort: [''],
    });
  }

  ngOnInit(): void {
  }

  onSearchArticles(filterForm: FormGroup) {

    if (filterForm.invalid) {
      return;
    }

    let searchFilters: SearchFilters = {
      begin_date: filterForm.value.begin_date,
      end_date: filterForm.value.end_date,
      facet: filterForm.value.facet,
      facet_fields: filterForm.value.facet_fields,
      facet_filter: filterForm.value.facet_filter,
      fl: filterForm.value.fl,
      fq: filterForm.value.fq,
      page: +(filterForm.value.page),
      q: filterForm.value.q,
      sort: filterForm.value.sort
    };

    this.onSearchSubmit.emit(searchFilters);
  }

  resetForm() {
    let searchFilters: SearchFilters = {
      begin_date: '',
      end_date: '',
      facet: '',
      facet_fields: '',
      facet_filter: '',
      fl: '',
      fq: '',
      page: 0,
      q: '',
      sort: ''
    };

    this.filterForm.reset();
    this.onSearchSubmit.emit(searchFilters);
  }
}
