import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MainSearchResultsComponent } from '../main-search-results/main-search-results.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public SearchList: any; 
  constructor(
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(MainSearchResultsComponent, {
      width: "400px",
      height:"350px"
    });
  }
}
