import { Injectable } from '@angular/core';
import { Team, Player} from './class';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {


  showDivs:boolean = true;
  showStart:boolean = false;

  public arrOfTeams:Team[] = new Array();
  

  constructor() { }


  saveTeam(name:string):void{
    this.arrOfTeams.push(new Team(name));
    }

  addPlayer(Player:Player):void{
    this.arrOfTeams[this.lenOfTeams()-1].addPlayerToArray(Player);
  }


  lenOfTeams():number{
    return this.arrOfTeams.length;
  }




}
