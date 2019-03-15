import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule,
        NgbModule,
        HttpClientModule
      ],
      declarations: [
        SearchComponent,
        SearchResultsComponent,
        AppComponent
      ],
      providers: [NgbPaginationConfig]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
