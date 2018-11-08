import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-army',
  templateUrl: './army.component.html',
  styleUrls: ['./army.component.css']
})
export class ArmyComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    class Soldier {
      private id:string;
      public fighter:boolean;
      public force:number;

      constructor (id:string,fighter:boolean,force:number)
      {
        this.id = id;
        this.fighter = fighter;
        this.force = Math.floor(Math.random() * 3 ) + 1;
      }

         getId():string{
           return this.id;
         }
         getFighter():boolean{
           return this.fighter;
         }
         getForce():number{
           return this.force;
         }

         setFighter(fighter:boolean):void{
           this.fighter = fighter;
         }
         setForce(force:number):void{
           this.force = force;
         }
    }


    class Comander extends Soldier {
      public arryOfSoldiers :Soldier[];

      constructor (id:string, fighter:boolean,force:number,arryOfSoldiers:[]){
        super (id,fighter,force);
        this.arryOfSoldiers = arryOfSoldiers;
      }

      getArryOfSoldiers():Soldier[]{
        return this.arryOfSoldiers;
      }
      setArryOfSoldiers(arryOfSoldiers:Soldier[]):void{
        this.arryOfSoldiers = arryOfSoldiers;
      }
      fighterCounter(){
        var i;
        var counter = 0;
         for (i=0; i<= this.arryOfSoldiers.length; i++){
            if (this.arryOfSoldiers[i].fighter = true){
              counter ++;
            }
         }   
      }

      
    }

class Division {
  divName:string;
  divComanderID: string;
  arryOfComanders:Comander[];
  arryOfSoldiers:Soldier[];

  constructor (divName:string,divComanderID: string,arryOfComanders:Comander[],arryOfSoldiers:Soldier[])
  {
    this.divName = divName;
    this.divComanderID = divComanderID;
    this.arryOfComanders = arryOfComanders;
    this.arryOfSoldiers = arryOfSoldiers;
  }

  getDivName():string{
    return this.divName;
  }
  setDivComanderID(divComanderID: string):void{
    this.divComanderID = divComanderID;
  }


}




  }

}