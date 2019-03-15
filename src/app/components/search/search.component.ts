import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { SearchResult } from '../../models/search-result.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchQuery: string;
  searchResults: SearchResult;

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
  }

  searchByQuery() {
    if (this.searchByQuery && this.searchQuery.trim().length > 0) {
      this.searchService.searchByQuery(this.searchQuery)
      .subscribe(
        (response: SearchResult) => this.searchResults = response
    );
    } else {
      this.searchResults.hits = [];
    }
  }

  searchByPage(page) {
    this.searchService.searchByPage(this.searchQuery, page - 1)
    .subscribe(
      (response: SearchResult) => {
       this.searchResults = response;
    }
  );
  }

}
