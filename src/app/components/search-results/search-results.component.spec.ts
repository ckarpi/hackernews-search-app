import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { SearchResultsComponent } from './search-results.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchResult } from 'src/app/models/search-result.model';

describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgbModule, HttpClientModule],
      declarations: [ SearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsComponent);
    component = fixture.componentInstance;
    component.results = {
      hits: [],
      hitsPerPage: 0,
      nbHits: 0,
      nbPages: 0,
      page: 0,
      query: ''
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
