import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { SearchResult } from '../models/search-result.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient,
    private apiService: ApiService
  ) { }

  searchByQuery(searchQuery: string): Observable<SearchResult> {
    const url = 'http://hn.algolia.com/api/v1/search?query=' + searchQuery;
    return this.http.get<SearchResult>(url);
  }

  searchByPage(searchQuery: string, page: number = 0): Observable<SearchResult> {
    const url = 'http://hn.algolia.com/api/v1/search?query=' + searchQuery + '&page=' + page;
    return this.http.get<SearchResult>(url);
  }
}
