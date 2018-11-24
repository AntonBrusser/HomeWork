import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Team } from '../class';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {



  arr: Team[];
  


  constructor(private myService: MyserviceService) {
    this.arr = myService.arrOfTeams;

  }



  ngOnInit() {
  }

  notHideMe(){
    this.myService.showStart = false;
    this.myService.showDivs = true;
    this.myService.arrOfTeams.splice(0,this.arr.length);
  }
  

  

}
