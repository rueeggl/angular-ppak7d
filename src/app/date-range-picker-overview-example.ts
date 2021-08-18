import { Component, OnInit } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';

/** @title Basic date range picker */
@Component({
  selector: 'date-range-picker-overview-example',
  templateUrl: 'date-range-picker-overview-example.html'
})
export class DateRangePickerOverviewExample implements OnInit {
  selectedDate: any;

  datesToHighlight = [
    '2021-08-19T18:30:00.000Z',
    '2021-08-20T18:30:00.000Z',
    '2021-08-21T18:30:00.000Z'
  ];

  constructor() {}

  ngOnInit() {}

  onSelect(event: any) {
    console.log(event);
    this.selectedDate = event;
  }

  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      const highlightDate = this.datesToHighlight
        .map(strDate => new Date(strDate))
        .some(
          d =>
            d.getDate() === date.getDate() &&
            d.getMonth() === date.getMonth() &&
            d.getFullYear() === date.getFullYear()
        );

      return highlightDate ? 'special-date' : '';
    };
  }
}

/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
