import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  public cityList: any; 
  constructor(public Citysrv: MainService) { }

  ngOnInit(): void {
    this.Citysrv.getAllCities().subscribe(results => {
      this.cityList = results;
    }
    )
  }
  DelectCity(id : any){
    this.Citysrv.deleteCity(id).subscribe(results=>{
    window.location.reload();
    });
  } 

}
