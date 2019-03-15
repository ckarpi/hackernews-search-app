import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { SearchResult } from '../../models/search-result.model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html'
})
export class SearchResultsComponent implements OnChanges {

  @Input()
  results: SearchResult;
  hits: Array<any>;
  pageSize = 20;
  page = 0;
  previousPage: number;

  @Output()
  pageChanged = new EventEmitter();

  constructor(
    private searchService: SearchService
  ) { }

  ngOnChanges() {
    this.hits = this.results.hits;
  }

  pageChangeEvent(page) {
    if (page !== this.previousPage && page !== this.results.page) {
      this.previousPage = page;
      this.loadData(page);
    }
    this.page = page;
  }

  loadData(page) {
    this.pageChanged.emit(page);
  }

}
