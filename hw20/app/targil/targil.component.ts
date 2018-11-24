import { Component, OnInit } from '@angular/core';
import { Player} from '../class'
import { MyserviceService } from '../myservice.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-targil',
  templateUrl: './targil.component.html',
  styleUrls: ['./targil.component.css']
})
export class TargilComponent implements OnInit {


NameOfTeam:string;
flag:boolean;
page:number;
name:string;
age:number;
showDivs:boolean;








  constructor(public myService:MyserviceService) {

    }

  ngOnInit() {

    this.page = 0;
    this.flag = false;
    this.showDivs = true;
    
      
    }
  




 

  createNewTeam():void{
 this.myService.saveTeam(this.NameOfTeam + ":" + " ");
 this.flag = true;
 this.NameOfTeam = "";
 this.name = "";
 this.age = null;
  }


  savePlayer():void{
    this.myService.addPlayer( new Player (this.name, this.age));

    if (this.page ==3) {
      this.flag = false;
      this.page = 0;
    }
    else{
      this.name = "";
      this.age = null;
      this.page ++;
      
    }
  }

  hideMe():void{
    this.myService.showDivs = false;
    this.myService.showStart = true;
  }

}
