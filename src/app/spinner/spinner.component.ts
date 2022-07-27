import { Component, OnInit } from '@angular/core';
import {SpinnerService} from "../services/spinner.service";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  isLoading: Boolean = false;

  constructor(private spinnerService: SpinnerService) {
    this.spinnerService.getLoading()
      .subscribe(value => {
        this.isLoading = value;
      });
  }

  ngOnInit(): void {
  }

}
