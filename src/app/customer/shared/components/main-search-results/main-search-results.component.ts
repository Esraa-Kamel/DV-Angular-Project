import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-main-search-results',
  templateUrl: './main-search-results.component.html',
  styleUrls: ['./main-search-results.component.css']
})
export class MainSearchResultsComponent implements OnInit {
  public SearchList: any; 
  constructor(public Searchsrv: MainService) { }

  ngOnInit(): void {
     
    this.Searchsrv.getAllProductsBySearch().subscribe(results => {
      this.SearchList = results;
    }
    );
  }

}
